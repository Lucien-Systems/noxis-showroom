import React, { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  descId?: string;
};

export default function Modal({ open, onClose, title, children, descId }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    lastActiveRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      lastActiveRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const container = dialogRef.current;
    if (!container) return;

    const focusables = getFocusable(container);
    (focusables[0] ?? container).focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        if (focusables.length === 0) { e.preventDefault(); return; }
        const idx = focusables.indexOf(document.activeElement as HTMLElement);
        let next = idx;
        if (e.shiftKey) next = idx <= 0 ? focusables.length - 1 : idx - 1;
        else next = idx === focusables.length - 1 ? 0 : idx + 1;
        e.preventDefault();
        focusables[next].focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const labelledBy = title ? "modal-title" : undefined;
  const describedBy = descId || undefined;

  return createPortal(
    <div
      ref={overlayRef}
      role="presentation"
      onMouseDown={(e) => { if (e.target === overlayRef.current) onClose(); }}
      className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm"
      aria-hidden={!open}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        ref={dialogRef}
        tabIndex={-1}
        className="mx-auto mt-24 w-[min(640px,calc(100%-2rem))] rounded-2xl border border-[#24345C] bg-[#0A132B] p-6 text-[#F2F5FF] shadow-[0_0_0_1px_#24345C,0_0_32px_3px_rgba(233,194,91,.12)] focus:outline-none"
      >
        {title && <h3 id="modal-title" className="mb-3 text-lg font-semibold">{title}</h3>}
        <div id={descId} className="text-sm text-[#97A7CC]">{children}</div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl border border-[#24345C] px-4 py-2 text-sm text-[#F2F5FF] hover:bg-[#101C3A] focus:outline-none focus:ring-2 focus:ring-[#FFD84F]"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function getFocusable(root: HTMLElement): HTMLElement[] {
  const selectors = [
    "a[href]","button:not([disabled])","textarea:not([disabled])",
    "input:not([disabled])","select:not([disabled])","[tabindex]:not([tabindex='-1'])",
  ].join(",");
  return Array.from(root.querySelectorAll<HTMLElement>(selectors)).filter(
    (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
  );
}
