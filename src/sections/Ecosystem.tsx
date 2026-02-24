type Project = {
  key: "hub" | "lucien" | "profile" | "archeon" | "portal" | "kryfor";
  name: string;
  url: string;
  desc: string;
};

const projects: Project[] = [
  {
    key: "hub",
    name: "Lucien Systems Hub",
    url: "https://luciensystems.io",
    desc: "Central navigation point for the full Lucien Systems network.",
  },
  {
    key: "lucien",
    name: "Lucien",
    url: "https://lucien.technology",
    desc: "Strategic architecture, sovereign operating frameworks, and execution systems.",
  },
  {
    key: "profile",
    name: "Adam Karl Lucien Profile",
    url: "https://adamkarl.lucien.technology",
    desc: "Official founder profile, mission context, archive, and direct strategic channel.",
  },
  {
    key: "archeon",
    name: "ARCHEON",
    url: "https://archeon.lucien.technology",
    desc: "Governance intelligence OS for resilience planning and state-scale decision architecture.",
  },
  {
    key: "portal",
    name: "Portal",
    url: "https://portal.lucien.technology",
    desc: "Interim management workspace for execution, oversight, and intervention workflows.",
  },
  {
    key: "kryfor",
    name: "Kryfor",
    url: "https://kryfor.lucien.technology",
    desc: "Agentic AI structure SaaS for modular automation and scalable deployment.",
  },
];

function EcosystemIcon({ kind }: { kind: Project["key"] }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (kind === "hub") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" {...common} />
        <circle cx="5" cy="8" r="1.8" {...common} />
        <circle cx="19" cy="8" r="1.8" {...common} />
        <circle cx="7" cy="18" r="1.8" {...common} />
        <circle cx="17" cy="18" r="1.8" {...common} />
        <path d="M9.4 10.2 6.7 8.9M14.6 10.2l2.7-1.3M10 14.4 8.4 16.2M14 14.4l1.6 1.8" {...common} />
      </svg>
    );
  }

  if (kind === "lucien") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3 5 6.5v5.3c0 4 2.7 6.8 7 9.2 4.3-2.4 7-5.2 7-9.2V6.5L12 3Z" {...common} />
        <path d="m9.5 11.8 1.8 1.8 3.2-3.4" {...common} />
      </svg>
    );
  }

  if (kind === "profile") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="8" r="3.3" {...common} />
        <path d="M5.2 19.5a6.8 6.8 0 0 1 13.6 0" {...common} />
      </svg>
    );
  }

  if (kind === "archeon") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M4 20h16M6 20V9M10 20V9M14 20V9M18 20V9M4 9h16M12 4l8 5H4l8-5Z" {...common} />
      </svg>
    );
  }

  if (kind === "portal") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect x="5" y="4.5" width="14" height="15" rx="2.2" {...common} />
        <path d="M9 8.5h6M9 12h6M9 15.5h4" {...common} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2" {...common} />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" {...common} />
    </svg>
  );
}

export default function Ecosystem() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.url} className="card p-5">
          <div className="flex items-start gap-3">
            <span className="icon-badge">
              <EcosystemIcon kind={project.key} />
            </span>
            <h3 className="m-0 text-lg font-semibold leading-tight">{project.name}</h3>
          </div>
          <p className="mt-2 text-mute">{project.desc}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-4"
          >
            Open {project.url.replace("https://", "")}
          </a>
        </article>
      ))}
    </div>
  );
}
