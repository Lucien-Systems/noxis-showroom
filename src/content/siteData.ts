export type Tier = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
};

export const tiers: Tier[] = [
  {
    id: "tier-a",
    name: "Tier A / Narrative Defense",
    tagline: "Narrative and disinformation threat intelligence",
    description:
      "Tracks coordinated influence operations, hostile narratives, and manipulation spikes across open, licensed, and mandated information streams.",
    capabilities: [
      "Narrative graph analysis and anomaly bursts",
      "Cross-lingual entity and campaign correlation",
      "Risk scoring for policy, public order, and strategic communications",
    ],
  },
  {
    id: "tier-b",
    name: "Tier B / Vision and Sensors",
    tagline: "Realtime camera intelligence and VMS fusion",
    description:
      "Combines fixed CCTV, mobile camera feeds, and edge sensors into one command pipeline for rapid incident response and operational continuity.",
    capabilities: [
      "Realtime camera ingestion and event indexing",
      "Multi-site command board with escalation workflows",
      "Operator handoff with immutable timeline context",
    ],
  },
  {
    id: "tier-c",
    name: "Tier C / Aerial and ISR",
    tagline: "Drone and geospatial operations layer",
    description:
      "Integrates UAV telemetry, aerial imagery, and mission channels for dynamic area monitoring under tiered government oversight.",
    capabilities: [
      "Drone mission stream orchestration",
      "Geospatial hotspot and perimeter monitoring",
      "Cross-tier triage from field ISR to strategic command",
    ],
  },
];

export const platformModules = [
  {
    title: "Constellation Command Grid",
    summary: "Unified command environment for narrative, vision, and aerial streams.",
    bullets: ["Multi-tier workspace", "Cross-agency operations log", "Escalation playbooks"],
  },
  {
    title: "Realtime Vision Core",
    summary: "Event-driven camera pipeline with risk-based alert routing.",
    bullets: ["VMS connectors", "Object and behavior alerting", "Incident playback"],
  },
  {
    title: "Narrative Risk Engine",
    summary: "Campaign detection and propaganda risk forecasting.",
    bullets: ["Narrative pattern model", "Actor-channel maps", "Threat propagation score"],
  },
  {
    title: "Aerial ISR Fabric",
    summary: "Drone telemetry fusion with geospatial event context.",
    bullets: ["UAV feed fusion", "Geo overlays", "Mission continuity checkpoints"],
  },
  {
    title: "Governance and Audit Chain",
    summary: "Legal-grade traceability for every critical output.",
    bullets: ["Cryptographic receipts", "Access ledger", "Replayable run history"],
  },
  {
    title: "Operator Integrity Controls",
    summary: "Role boundaries and mandate-aware access enforcement.",
    bullets: ["Need-to-know policy gates", "Redaction and minimization", "Supervisory override rules"],
  },
];

export const homepageStats = [
  { value: "24/7", label: "Command readiness" },
  { value: "3", label: "Tiered intelligence layers" },
  { value: "99.99%", label: "Audit trace coverage" },
  { value: "< 60s", label: "Cross-tier alert relay" },
];

export const trustLogos = [
  "NATIONAL SECURITY HQ",
  "CIVIL PROTECTION AUTHORITY",
  "CRITICAL INFRASTRUCTURE BOARD",
  "TRANSPORT COMMAND",
  "PUBLIC HEALTH TASKFORCE",
  "EMERGENCY RESPONSE NETWORK",
];

export const useCases = [
  {
    title: "Election integrity and narrative containment",
    detail:
      "Detects coordinated disinformation spikes, synthetic media clusters, and influence channels before they destabilize public decision cycles.",
  },
  {
    title: "Urban camera command and incident response",
    detail:
      "Correlates realtime camera signals across city, transport, and emergency nodes for faster intervention decisions.",
  },
  {
    title: "Border and perimeter drone oversight",
    detail:
      "Monitors geospatial corridors with mission telemetry and synchronized escalation into command governance channels.",
  },
  {
    title: "Critical infrastructure continuity",
    detail:
      "Maps cascading risks across facilities, media narratives, and field sensors to protect operations under stress.",
  },
];

export const industries = [
  "National Security",
  "Public Sector",
  "Critical Infrastructure",
  "Financial Systems",
  "Media and Communications",
  "Transportation",
  "Healthcare Networks",
  "Energy Operations",
];

export const roles = [
  "Security Leadership",
  "Intelligence Directors",
  "Operations Centers",
  "Crisis Communication Teams",
  "Policy and Governance Boards",
  "Risk and Compliance Leads",
];

export const companyMilestones = [
  {
    year: "2023",
    title: "NOXIS architecture program initiated",
    note: "Mission: align advanced surveillance and narrative intelligence with accountable governance.",
  },
  {
    year: "2024",
    title: "Tiered intelligence blueprint validated",
    note: "Narrative, camera, and aerial layers integrated into one decision model.",
  },
  {
    year: "2025",
    title: "Command-ready synthetic operational environment",
    note: "Full-stack simulation enabled for policy rehearsal and operator training.",
  },
  {
    year: "2026",
    title: "National deployment preparation framework",
    note: "Mandate-aware access controls and legal-grade audit protocols completed.",
  },
];

export const labReports = [
  {
    title: "State of Coordinated Narrative Operations / Q1 2026",
    category: "Narrative Intelligence",
    excerpt:
      "How cross-platform campaign cells moved from social clusters to mainstream discourse in under 48 hours.",
  },
  {
    title: "Realtime Vision Latency Benchmarks for Tier B",
    category: "Vision Operations",
    excerpt:
      "Operational benchmark report for high-load camera pipelines and response-window reliability.",
  },
  {
    title: "Aerial ISR Relay Patterns in Dense Urban Zones",
    category: "Drone Operations",
    excerpt:
      "Mission continuity analysis for UAV handoff, geofence enforcement, and command reconciliation.",
  },
  {
    title: "Oversight by Design: Auditability as a Security Primitive",
    category: "Governance",
    excerpt:
      "Why cryptographic traceability must be treated as a core command capability, not a compliance add-on.",
  },
];
