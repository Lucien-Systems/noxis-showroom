type Project = {
  name: string;
  url: string;
  desc: string;
};

const projects: Project[] = [
  {
    name: "Lucien Systems Hub",
    url: "https://luciensystems.io",
    desc: "Central navigation point for the full Lucien Systems network.",
  },
  {
    name: "Lucien",
    url: "https://lucien.technology",
    desc: "Strategic architecture, sovereign operating frameworks, and execution systems.",
  },
  {
    name: "Adam Karl Lucien Profile",
    url: "https://adamkarl.lucien.technology",
    desc: "Official founder profile, mission context, archive, and direct strategic channel.",
  },
  {
    name: "ARCHEON",
    url: "https://archeon.lucien.technology",
    desc: "Governance intelligence OS for resilience planning and state-scale decision architecture.",
  },
  {
    name: "Portal",
    url: "https://portal.lucien.technology",
    desc: "Interim management workspace for execution, oversight, and intervention workflows.",
  },
  {
    name: "Kryfor",
    url: "https://kryfor.lucien.technology",
    desc: "Agentic AI structure SaaS for modular automation and scalable deployment.",
  },
];

export default function Ecosystem() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.url} className="card p-5">
          <h3 className="m-0 text-lg font-semibold">{project.name}</h3>
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
