export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section pt-8 pb-10">
      <div className="container">
        <div className="card overflow-hidden">
          <div className="grid gap-6 p-6 md:grid-cols-4 md:p-8">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <img src="/noxis-logo.svg" alt="NOXIS" className="h-8 w-auto" />
              </div>
              <p className="m-0 text-sm text-mute">
                Rights-first intelligence suite in the Lucien ecosystem.
              </p>
            </div>

            <div>
              <h4 className="m-0 text-sm">Contact</h4>
              <ul className="mt-2 space-y-1 text-sm text-mute">
                <li>
                  <a className="hover:text-ink" href="mailto:company@luciensystems.io">
                    company@luciensystems.io
                  </a>
                </li>
                <li>
                  <a className="hover:text-ink" href="#ecosystem">
                    Ecosystem links
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="m-0 text-sm">Projects</h4>
              <ul className="mt-2 space-y-1 text-sm text-mute">
                <li><a className="hover:text-ink" href="https://luciensystems.io" target="_blank" rel="noopener noreferrer">luciensystems.io</a></li>
                <li><a className="hover:text-ink" href="https://lucien.technology" target="_blank" rel="noopener noreferrer">lucien.technology</a></li>
                <li><a className="hover:text-ink" href="https://archeon.lucien.technology" target="_blank" rel="noopener noreferrer">archeon.lucien.technology</a></li>
                <li><a className="hover:text-ink" href="https://portal.lucien.technology" target="_blank" rel="noopener noreferrer">portal.lucien.technology</a></li>
                <li><a className="hover:text-ink" href="https://kryfor.lucien.technology" target="_blank" rel="noopener noreferrer">kryfor.lucien.technology</a></li>
              </ul>
            </div>

            <div>
              <h4 className="m-0 text-sm">Assurance</h4>
              <ul className="mt-2 space-y-1 text-sm text-mute">
                <li>Rights-first boundaries</li>
                <li>Auditable output chain</li>
                <li>Targeted collection model</li>
                <li>Synthetic demo environment</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-line px-6 py-3 text-xs text-mute md:px-8">
            <span>© {year} NOXIS.</span>
            <span>By Adam Karl Lucien</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
