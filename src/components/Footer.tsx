// src/components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section pt-10 pb-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="rounded-2xl border border-line bg-panel shadow-glow overflow-hidden">
          {/* Top grid */}
          <div className="grid gap-8 p-6 md:p-8 md:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                {/* Logo from Navbar */}
                <img
                  src="/assets/noxis-hero.png"
                  alt="NOXIS"
                  className="h-8 w-auto"
                />
                <span className="inline-flex items-center rounded-md border border-line px-2 py-0.5 text-[11px] text-accent bg-accent/10">
                  Secure Vision Suite
                </span>
              </div>
              <p className="text-mute text-sm">
                Rights-first OSINT & analysis suite. Synthetic demo — no live data.
              </p>
            </div>

            {/* Contact */}
            <div>
              <div className="text-sm font-semibold mb-2">Contact</div>
              <ul className="space-y-1 text-sm">
                <li>
                  <a className="text-mute hover:text-ink hover:underline" href="mailto:media@noxis.ai">
                    media@noxis.ai
                  </a>
                </li>
                <li>
                  <a className="text-mute hover:text-ink hover:underline" href="#press">
                    Press & media
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <div className="text-sm font-semibold mb-2">Links</div>
              <ul className="space-y-1 text-sm">
                <li>
                  <a className="text-mute hover:text-ink hover:underline" href="#technology">
                    Technology
                  </a>
                </li>
                <li>
                  <a className="text-mute hover:text-ink hover:underline" href="#roadmap">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a className="text-mute hover:text-ink hover:underline" href="#atlas">
                    Atlas
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <div className="text-sm font-semibold mb-2">Legal</div>
              <ul className="space-y-1 text-sm">
                <li className="text-mute">WCAG AA contrast</li>
                <li className="text-mute">Auditability by design</li>
                <li>
                  <a className="text-mute hover:text-ink hover:underline" href="#privacy">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-mute hover:text-ink hover:underline" href="#terms">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-line/60 px-6 py-3 text-xs text-mute flex items-center justify-between">
            <div>© {year} NOXIS. All rights reserved.</div>
            <div className="h-px w-24 bg-accent2/70 shadow-[0_0_12px_1px_rgba(255,216,79,0.35)] rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}