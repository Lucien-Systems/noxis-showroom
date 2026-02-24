import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiFileText, FiCalendar, FiMail, FiImage, FiCopy } from "react-icons/fi";
import Modal from "../components/Modal";

type Tab = "press" | "assets";

const fade = { initial:{opacity:0,y:12,scale:.98}, animate:{opacity:1,y:0,scale:1,transition:{duration:.25}}, exit:{opacity:0,y:-8,scale:.98,transition:{duration:.18}} };

const assets = [
  { id:"logo-svg", t:"Logo (SVG)", src:"/noxis-logo.svg", kind:"img" as const },
  { id:"logo-png", t:"Logo (PNG)", src:"/press/logo.png", kind:"img" as const },
  { id:"dashboard", t:"Dashboard Mock", src:"/press/dashboard.png", kind:"img" as const },
  { id:"palette", t:"Color Palette", src:"/press/palette.png", kind:"img" as const },
];

export default function Press(){
  const [tab,setTab] = useState<Tab>("press");
  const [open,setOpen] = useState<{title:string,src:string}|null>(null);

  const copy = async (v:string)=>{ try{ await navigator.clipboard.writeText(v);}catch{} };

  return (
    <section id="press" className="section">
      <div className="card p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_520px]">
          <motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} transition={{duration:.35}}>
            <p className="text-mute mt-2 text-base md:text-lg max-w-[56ch]">
              Transparency by design. Rights-first intelligence, open to scrutiny. All materials are synthetic demo assets — no live data.
            </p>
            <div className="h-1 w-40 bg-gradient-to-r from-accent to-accent2 rounded mt-4" />
          </motion.div>

          <motion.div initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} transition={{duration:.35,delay:.08}} className="grid gap-3 md:grid-cols-2">
            <a href="/press/press-kit.zip" className="card p-4 hover:shadow-glow transition flex items-center gap-3">
              <FiDownload className="text-accent2" /><div><div className="font-semibold">Download Press Kit</div><div className="text-mute text-sm">Logos, screenshots, brand guide</div></div>
            </a>
            <a href="/press/press-release.pdf" className="card p-4 hover:shadow-glow transition flex items-center gap-3">
              <FiFileText className="text-accent2" /><div><div className="font-semibold">Latest Press Release</div><div className="text-mute text-sm">PDF • synthetic</div></div>
            </a>
            <a href="/press/briefing.ics" className="card p-4 hover:shadow-glow transition flex items-center gap-3">
              <FiCalendar className="text-accent2" /><div><div className="font-semibold">Add Media Briefing</div><div className="text-mute text-sm">.ics calendar invite</div></div>
            </a>
            <button onClick={()=>copy("mailto:media@noxis.ai")} className="card p-4 hover:shadow-glow transition flex items-center gap-3">
              <FiMail className="text-accent2" /><div><div className="font-semibold">Contact</div><div className="text-mute text-sm">media@noxis.ai (copy)</div></div>
            </button>
          </motion.div>
        </div>

        <div className="h-px bg-line/60 my-6" />

        <div className="flex items-center gap-2">
          <button onClick={()=>setTab("press")} className={`rounded-xl px-3 py-1.5 text-sm border transition ${tab==="press"?"border-accent2 text-ink shadow-glow-strong":"border-line text-mute hover:text-ink hover:shadow-glow"}`}>Press Releases</button>
          <button onClick={()=>setTab("assets")} className={`rounded-xl px-3 py-1.5 text-sm border transition ${tab==="assets"?"border-accent2 text-ink shadow-glow-strong":"border-line text-mute hover:text-ink hover:shadow-glow"}`}>Brand Assets</button>
        </div>

        <div className="mt-4 relative">
          <AnimatePresence mode="wait">
            {tab==="press" && (
              <motion.div key="press" {...fade} className="grid gap-3">
                <a href="/press/press-release.pdf" className="panel p-4 hover:shadow-glow transition flex items-start gap-3">
                  <FiFileText className="text-accent2 mt-0.5"/>
                  <div>
                    <div className="font-semibold">Noxis announces rights-first narrative intelligence demo</div>
                    <div className="text-mute text-sm">Synthetic OSINT signals, narrative graphs, and audit-ready briefs with cryptographic receipts.</div>
                  </div>
                </a>
                <div className="panel p-4 flex items-start gap-3">
                  <FiCopy className="text-accent mt-0.5"/>
                  <div>
                    <div className="font-semibold">Boilerplate</div>
                    <div className="text-mute text-sm">Noxis is a rights-first intelligence demo focused on targeted scope, minimization, and verifiable oversight — without mass surveillance.</div>
                  </div>
                </div>
              </motion.div>
            )}
            {tab==="assets" && (
              <motion.div key="assets" {...fade} className="grid gap-3 md:grid-cols-4">
                {assets.map(a=>(
                  <button key={a.id} onClick={()=>setOpen({title:a.t, src:a.src})} className="relative group overflow-hidden rounded-2xl border border-line bg-panel hover:shadow-glow transition">
                    <div className="absolute inset-0 bg-[radial-gradient(400px_140px_at_-120px_-80px,rgba(255,204,85,.10),transparent_70%)]" />
                    <div className="aspect-[4/3] grid place-items-center">
                      <FiImage className="text-accent2 opacity-80" />
                    </div>
                    <div className="px-3 py-2 text-left">
                      <div className="text-sm font-semibold">{a.t}</div>
                      <div className="text-xs text-mute">{a.src.split('/').pop()}</div>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Modal open={!!open} onClose={()=>setOpen(null)} title={open?.title ?? ""} descId="asset-desc">
          <div id="asset-desc" className="grid gap-3">
            {open && open.src.endsWith(".svg") ? (
              <div className="bg-bg rounded-xl border border-line p-3 overflow-auto"><img src={open.src} alt={open.title} className="max-h-[320px] mx-auto"/></div>
            ) : open ? (
              <img src={open.src} alt={open.title} className="rounded-xl border border-line"/>
            ) : null}
            <div className="flex gap-2 justify-end">
              <a className="btn-primary" href={open?.src || "#"} download>Download</a>
              <button className="btn" onClick={()=>setOpen(null)}>Close</button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}
