import { ReactNode } from "react";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-container px-6 md:px-10">{children}</div>
    </div>
  );
}
