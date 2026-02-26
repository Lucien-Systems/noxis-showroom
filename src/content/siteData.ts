import type { Language } from "../i18n-core";

export type Tier = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
};

export type PlatformModule = {
  title: string;
  summary: string;
  bullets: string[];
};

export type Stat = {
  value: string;
  label: string;
};

export type UseCase = {
  title: string;
  detail: string;
};

export type Milestone = {
  year: string;
  title: string;
  note: string;
};

export type LabReport = {
  title: string;
  category: string;
  excerpt: string;
};

export type SiteData = {
  tiers: Tier[];
  platformModules: PlatformModule[];
  homepageStats: Stat[];
  trustLogos: string[];
  useCases: UseCase[];
  industries: string[];
  roles: string[];
  companyMilestones: Milestone[];
  labReports: LabReport[];
};

const siteDataByLanguage: Record<Language, SiteData> = {
  en: {
    tiers: [
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
    ],
    platformModules: [
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
    ],
    homepageStats: [
      { value: "24/7", label: "Command readiness" },
      { value: "3", label: "Tiered intelligence layers" },
      { value: "99.99%", label: "Audit trace coverage" },
      { value: "< 60s", label: "Cross-tier alert relay" },
    ],
    trustLogos: [
      "NATIONAL SECURITY HQ",
      "CIVIL PROTECTION AUTHORITY",
      "CRITICAL INFRASTRUCTURE BOARD",
      "TRANSPORT COMMAND",
      "PUBLIC HEALTH TASKFORCE",
      "EMERGENCY RESPONSE NETWORK",
    ],
    useCases: [
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
    ],
    industries: [
      "National Security",
      "Public Sector",
      "Critical Infrastructure",
      "Financial Systems",
      "Media and Communications",
      "Transportation",
      "Healthcare Networks",
      "Energy Operations",
    ],
    roles: [
      "Security Leadership",
      "Intelligence Directors",
      "Operations Centers",
      "Crisis Communication Teams",
      "Policy and Governance Boards",
      "Risk and Compliance Leads",
    ],
    companyMilestones: [
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
    ],
    labReports: [
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
    ],
  },
  cs: {
    tiers: [
      {
        id: "tier-a",
        name: "Tier A / Obrana informačního prostoru",
        tagline: "Analýza narativních a dezinformačních hrozeb",
        description:
          "Sleduje koordinované vlivové operace, nepřátelské narativy a manipulační špičky nad otevřenými, licencovanými i mandatovanými datovými zdroji.",
        capabilities: [
          "Grafová analýza narativů a anomálních vln",
          "Korelace entit a kampaní napříč jazyky",
          "Rizikové skórování pro státní správu, veřejný pořádek a strategickou komunikaci",
        ],
      },
      {
        id: "tier-b",
        name: "Tier B / Vize a senzory",
        tagline: "Inteligence z kamer v reálném čase a fúze s VMS",
        description:
          "Propojuje fixní CCTV, mobilní kamerové streamy a edge senzory do jednoho velitelského toku pro rychlou reakci a provozní kontinuitu.",
        capabilities: [
          "Ingest kamerových streamů a indexace událostí v reálném čase",
          "Vícelokalitní operační dashboard s eskalačními workflow",
          "Předávání incidentů mezi operátory s neměnným kontextem časové osy",
        ],
      },
      {
        id: "tier-c",
        name: "Tier C / Aerial a ISR",
        tagline: "Dronová a geospatial operační vrstva",
        description:
          "Integruje telemetrii UAV, letecká data a mission kanály pro dynamické monitorování území pod víceúrovňovým státním dohledem.",
        capabilities: [
          "Orchestrace dronových misí a streamů",
          "Geospatial monitoring hotspotů a perimetrů",
          "Cross-tier triáž od terénního ISR k centrálnímu velení",
        ],
      },
    ],
    platformModules: [
      {
        title: "Constellation Command Grid",
        summary: "Jednotné velitelské prostředí pro narativní, kamerové i letecké streamy.",
        bullets: ["Vícevrstvý workspace", "Provozní log napříč institucemi", "Eskalace podle playbooků"],
      },
      {
        title: "Realtime Vision Core",
        summary: "Událostně řízený kamerový pipeline s rizikově řízeným routováním alertů.",
        bullets: ["Konektory na VMS", "Alerty chování a objektů", "Forenzní playback incidentů"],
      },
      {
        title: "Narrative Risk Engine",
        summary: "Detekce kampaní a predikce rizik informačních operací.",
        bullets: ["Model narativních vzorců", "Mapy aktérů a kanálů", "Skóre šíření hrozeb"],
      },
      {
        title: "Aerial ISR Fabric",
        summary: "Fúze dronové telemetrie s geospatial kontextem událostí.",
        bullets: ["Fúze UAV feedů", "Geografické vrstvy", "Kontrolní body kontinuity misí"],
      },
      {
        title: "Governance and Audit Chain",
        summary: "Právně obhajitelná dohledatelnost každého kritického výstupu.",
        bullets: ["Kryptografické receipts", "Přístupový ledger", "Replay provozních rozhodnutí"],
      },
      {
        title: "Operator Integrity Controls",
        summary: "Mandátové hranice rolí a řízení oprávnění podle účelu.",
        bullets: ["Need-to-know policy gates", "Redakce a minimalizace dat", "Supervizní override pravidla"],
      },
    ],
    homepageStats: [
      { value: "24/7", label: "Operační připravenost" },
      { value: "3", label: "Zpravodajské vrstvy" },
      { value: "99.99%", label: "Pokrytí auditní stopy" },
      { value: "< 60 s", label: "Předání alertu mezi vrstvami" },
    ],
    trustLogos: [
      "NÁRODNÍ BEZPEČNOSTNÍ ÚSTŘEDÍ",
      "ÚŘAD CIVILNÍ OCHRANY",
      "RADA KRITICKÉ INFRASTRUKTURY",
      "DOPRAVNÍ OPERAČNÍ VELENÍ",
      "KOORDINAČNÍ ŠTÁB VEŘEJNÉHO ZDRAVÍ",
      "SÍŤ KRIZOVÉ ODEZVY",
    ],
    useCases: [
      {
        title: "Ochrana volebního prostoru a containment narativů",
        detail:
          "Odhaluje koordinované dezinformační vlny, syntetický obsah i vlivové kanály dříve, než rozkolísají rozhodovací procesy institucí.",
      },
      {
        title: "Městské kamerové velení a incident response",
        detail:
          "Koreluje živé kamerové signály napříč městem, dopravou a složkami IZS pro rychlejší operační rozhodnutí.",
      },
      {
        title: "Perimetr a hraniční dohled pomocí dronů",
        detail:
          "Monitoruje geospatial koridory přes telemetrii misí a navázanou eskalaci do velitelských governance kanálů.",
      },
      {
        title: "Kontinuita kritické infrastruktury",
        detail:
          "Mapuje kaskádová rizika napříč provozem, mediálním tlakem a terénními senzory, aby chránil provoz pod zátěží.",
      },
    ],
    industries: [
      "Národní bezpečnost",
      "Veřejná správa",
      "Kritická infrastruktura",
      "Finanční systémy",
      "Média a komunikace",
      "Doprava",
      "Zdravotní sítě",
      "Energetika",
    ],
    roles: [
      "Bezpečnostní vedení",
      "Ředitelé zpravodajství",
      "Operační centra",
      "Krizová komunikace",
      "Politické a governance rady",
      "Risk a compliance vedení",
    ],
    companyMilestones: [
      {
        year: "2023",
        title: "Zahájen architektonický program NOXIS",
        note: "Cíl: propojit pokročilé zpravodajství a dohledové technologie s odpovědným governance rámcem.",
      },
      {
        year: "2024",
        title: "Ověření vícevrstvého modelu inteligence",
        note: "Narativní, kamerová a letecká vrstva sjednoceny do jednoho rozhodovacího modelu.",
      },
      {
        year: "2025",
        title: "Spuštěno syntetické operační prostředí",
        note: "Plnohodnotné simulace pro policy rehearsal a výcvik operátorů.",
      },
      {
        year: "2026",
        title: "Rámec pro národní nasazení",
        note: "Dokončeny mandátové přístupové hranice a právně obhajitelný auditní protokol.",
      },
    ],
    labReports: [
      {
        title: "Stav koordinovaných narativních operací / Q1 2026",
        category: "Narativní inteligence",
        excerpt:
          "Jak se koordinační buňky přesouvaly ze sociálních clusterů do mainstreamové debaty během méně než 48 hodin.",
      },
      {
        title: "Latency benchmarky kamerové vrstvy Tier B",
        category: "Vizuální operace",
        excerpt: "Benchmark report pro vysokou zátěž kamerových pipeline a spolehlivost reakčních oken.",
      },
      {
        title: "Vzorce relay dronového ISR v husté městské zástavbě",
        category: "Dronové operace",
        excerpt: "Analýza kontinuity misí při UAV handoff, geofence enforcement a command reconciliation.",
      },
      {
        title: "Oversight by Design: auditovatelnost jako bezpečnostní primitivum",
        category: "Governance",
        excerpt:
          "Proč má být kryptografická dohledatelnost považována za základní schopnost velitelského systému, ne jen compliance doplněk.",
      },
    ],
  },
};

export function getSiteData(language: Language): SiteData {
  return siteDataByLanguage[language] ?? siteDataByLanguage.en;
}
