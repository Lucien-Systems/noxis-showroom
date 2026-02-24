import { motion, useMotionValue, useTransform } from "framer-motion";
import CountUp from "react-countup";

export default function Hero(){
  const mx=useMotionValue(0), my=useMotionValue(0);
  const tX=useTransform(mx,[-200,200],[-8,8]);
  const tY=useTransform(my,[-200,200],[-6,6]);

  return (
    <div className="grid gap-6 md:grid-cols-2 items-end">
      <div>
        <motion.h1
          initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.45}}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          AI against disinformation.<br/>
          <span className="text-accent">Without mass surveillance.</span>
        </motion.h1>

        <motion.p
          initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.08}}
          className="text-mute max-w-[760px] mt-3"
        >
          Rights-first intelligence. Synthetic signals, narrative graphs, audit-ready briefs. Never mass surveillance.
        </motion.p>

        <motion.div
          initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.12}}
          className="flex gap-3 mt-4"
        >
          <a className="btn-primary" href="#ecosystem">Lucien Ecosystem</a>
          <a className="btn" href="#about">Learn More</a>
        </motion.div>

        <div className="grid gap-3 mt-5 md:grid-cols-3">
          <motion.div whileHover={{y:-2}} className="panel shadow-glow-strong border-line/80">
            <div className="px-4 py-4">
              <div className="text-xs text-mute">Signals/min</div>
              <div className="text-2xl md:text-3xl font-extrabold"><CountUp end={240} duration={2}/></div>
            </div>
          </motion.div>
          <motion.div whileHover={{y:-2}} className="panel shadow-glow-strong border-line/80">
            <div className="px-4 py-4">
              <div className="text-xs text-mute">Narratives tracked</div>
              <div className="text-2xl md:text-3xl font-extrabold"><CountUp end={128} duration={2}/></div>
            </div>
          </motion.div>
          <motion.div whileHover={{y:-2}} className="panel shadow-glow-strong border-line/80">
            <div className="px-4 py-4">
              <div className="text-xs text-mute">Codebase • Coffee (L)</div>
              <div className="text-2xl md:text-3xl font-extrabold">
                <CountUp end={1200000} duration={2} separator=","/> • <CountUp end={60} duration={2}/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
  className="h-[280px] md:h-[320px] rounded-2xl border border-line/70 shadow-glow-strong relative overflow-hidden bg-gradient-to-br from-[#142033]/70 via-[#0d162c]/60 to-transparent"
  onMouseMove={(e)=>{
    const r=(e.currentTarget as HTMLElement).getBoundingClientRect();
    mx.set(e.clientX-(r.left+r.width/2)); my.set(e.clientY-(r.top+r.height/2));
  }}
  initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.45}}
  style={{translateX:tX,translateY:tY}}
>
  {/* Jemný podklad glow */}
  <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_center,#1e2a44_10%,transparent_70%)] opacity-80" />

  {/* Obrázek */}
  <img
    src="/assets/noxis-hero.png"
    alt="Noxis Logo"
    className="absolute inset-0 h-full w-full object-contain p-6 md:p-8 pointer-events-none select-none"
  />
</motion.div>
    </div>
  );
}
