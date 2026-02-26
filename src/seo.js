const SITE_ORIGIN = (import.meta.env.VITE_SITE_URL ?? "https://noxis.luciensystems.io").replace(/\/$/, "");
const OG_IMAGE = `${SITE_ORIGIN}/assets/noxis-hero.png`;
const seoRoutes = {
    en: {
        "/": {
            path: "/",
            pageName: "Home",
            title: "NOXIS | Sovereign Intelligence Grid",
            description: "NOXIS is a tiered intelligence platform combining narrative defense, realtime camera operations, and drone ISR with accountable oversight.",
            keywords: "noxis, sovereign intelligence, narrative defense, surveillance software, realtime camera intelligence, drone ISR, command platform",
        },
        "/platform": {
            path: "/platform",
            pageName: "Platform",
            title: "Platform | NOXIS",
            description: "Explore the NOXIS platform architecture: narrative intelligence, live camera fusion, aerial ISR workflows, and legal-grade audit traceability.",
            keywords: "noxis platform, tiered intelligence, camera fusion, narrative risk engine, aerial ISR, operational audit",
        },
        "/solutions": {
            path: "/solutions",
            pageName: "Solutions",
            title: "Solutions | NOXIS",
            description: "Mission-specific NOXIS solutions for public sector, critical infrastructure, and security teams handling narrative, visual, and aerial threats.",
            keywords: "security solutions, surveillance platform solutions, threat intelligence use cases, critical infrastructure protection",
        },
        "/company": {
            path: "/company",
            pageName: "Company",
            title: "Company | NOXIS",
            description: "Learn about NOXIS governance-first mission, leadership, alliance framework, and institutional deployment standards.",
            keywords: "noxis company, governance-first intelligence, institutional security technology, oversight and compliance",
        },
        "/pricing": {
            path: "/pricing",
            pageName: "Pricing",
            title: "Pricing | NOXIS",
            description: "Request NOXIS pricing for Tier A, Tier B, and Tier C deployments based on command scope, integration needs, and governance requirements.",
            keywords: "noxis pricing, surveillance platform pricing, intelligence software pricing, tiered deployment costs",
        },
        "/lab": {
            path: "/lab",
            pageName: "LAB",
            title: "LAB | NOXIS",
            description: "Read NOXIS LAB intelligence notes, benchmark reports, and operational research across narrative, vision, and aerial domains.",
            keywords: "noxis lab, intelligence reports, narrative intelligence research, camera benchmark reports, drone ISR analysis",
        },
    },
    cs: {
        "/": {
            path: "/",
            pageName: "Domů",
            title: "NOXIS | Suverénní zpravodajská síť",
            description: "NOXIS je vícevrstvá zpravodajská platforma, která propojuje obranu informačního prostoru, práci s živými kamerami a dronové ISR pod dohledatelnou správou.",
            keywords: "noxis, zpravodajská platforma, obrana proti dezinformacím, dohledový software, analýza kamer v reálném čase, drony ISR",
        },
        "/platform": {
            path: "/platform",
            pageName: "Platforma",
            title: "Platforma | NOXIS",
            description: "Prozkoumejte architekturu NOXIS: narativní inteligence, fúze kamerových streamů, dronové ISR workflow a auditovatelné rozhodovací stopy.",
            keywords: "platforma noxis, vícevrstvá inteligence, kamerová fúze, narativní riziko, dronové ISR, provozní audit",
        },
        "/solutions": {
            path: "/solutions",
            pageName: "Řešení",
            title: "Řešení | NOXIS",
            description: "NOXIS nabízí scénářově řízená řešení pro státní správu, kritickou infrastrukturu a bezpečnostní týmy řešící informační i fyzické hrozby.",
            keywords: "bezpečnostní řešení, dohledové řešení, use case zpravodajství, ochrana kritické infrastruktury",
        },
        "/company": {
            path: "/company",
            pageName: "Společnost",
            title: "Společnost | NOXIS",
            description: "Seznamte se s governance-first přístupem NOXIS, vedením týmu, aliančním rámcem a standardy institucionálního nasazení.",
            keywords: "společnost noxis, governance-first bezpečnost, institucionální technologie, audit a dohled",
        },
        "/pricing": {
            path: "/pricing",
            pageName: "Ceník",
            title: "Ceník | NOXIS",
            description: "Vyžádejte si cenový návrh NOXIS pro Tier A, Tier B a Tier C podle rozsahu provozu, integračních nároků a požadavků dohledu.",
            keywords: "ceník noxis, cena dohledové platformy, cena zpravodajského software, tier nasazení",
        },
        "/lab": {
            path: "/lab",
            pageName: "LAB",
            title: "LAB | NOXIS",
            description: "Čtěte výstupy NOXIS LAB: analytické poznámky, benchmark reporty a provozní výzkum v narativní, kamerové a dronové doméně.",
            keywords: "noxis lab, zpravodajské reporty, výzkum dezinformací, benchmark kamerových systémů, analýza dronového ISR",
        },
    },
};
function upsertMeta(attr, key, value) {
    const selector = `meta[${attr}="${key}"]`;
    let tag = document.head.querySelector(selector);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", value);
}
function upsertLink(rel, href, hreflang) {
    const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
    let link = document.head.querySelector(selector);
    if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        if (hreflang)
            link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
    }
    link.setAttribute("href", href);
}
function upsertJsonLd(id, payload) {
    const selector = `script[type="application/ld+json"][data-seo="${id}"]`;
    let script = document.head.querySelector(selector);
    if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", id);
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(payload);
}
function removeJsonLd(id) {
    const node = document.head.querySelector(`script[type="application/ld+json"][data-seo="${id}"]`);
    if (node)
        node.remove();
}
function buildBreadcrumb(pathname, pageName, canonicalUrl, language) {
    if (pathname === "/")
        return null;
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: language === "cs" ? "Domů" : "Home",
                item: `${SITE_ORIGIN}/`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: pageName,
                item: canonicalUrl,
            },
        ],
    };
}
export function applyRouteSeo(pathname, language) {
    const langRoutes = seoRoutes[language] ?? seoRoutes.en;
    const seo = langRoutes[pathname] ?? langRoutes["/"];
    const canonicalUrl = `${SITE_ORIGIN}${seo.path}`;
    document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "keywords", seo.keywords);
    upsertMeta("name", "robots", "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1");
    upsertMeta("name", "author", "NOXIS");
    upsertMeta("name", "application-name", "NOXIS");
    upsertMeta("name", "theme-color", "#020407");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "NOXIS");
    upsertMeta("property", "og:locale", language === "cs" ? "cs_CZ" : "en_US");
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", OG_IMAGE);
    upsertLink("canonical", canonicalUrl);
    upsertLink("alternate", canonicalUrl, "en");
    upsertLink("alternate", canonicalUrl, "cs");
    upsertLink("alternate", canonicalUrl, "x-default");
    const organizationDescription = language === "cs"
        ? "NOXIS je suverénní zpravodajská platforma pro obranu informačního prostoru, práci s živými kamerami a dronové ISR pod dohledatelnou správou."
        : "NOXIS is a sovereign intelligence platform for narrative defense, realtime camera operations, and aerial ISR under accountable governance.";
    upsertJsonLd("organization", {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: "NOXIS",
        url: SITE_ORIGIN,
        logo: `${SITE_ORIGIN}/noxis-logo.svg`,
        description: organizationDescription,
    });
    upsertJsonLd("website", {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        name: "NOXIS",
        url: SITE_ORIGIN,
        inLanguage: language === "cs" ? "cs" : "en",
    });
    upsertJsonLd("webpage", {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: seo.title,
        description: seo.description,
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        about: { "@id": `${SITE_ORIGIN}/#organization` },
        inLanguage: language === "cs" ? "cs" : "en",
    });
    const breadcrumb = buildBreadcrumb(seo.path, seo.pageName, canonicalUrl, language);
    if (breadcrumb) {
        upsertJsonLd("breadcrumb", breadcrumb);
    }
    else {
        removeJsonLd("breadcrumb");
    }
}
