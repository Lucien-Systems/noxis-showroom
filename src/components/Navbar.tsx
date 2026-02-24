import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV = ["about","atlas","principles","how","audience","technology","roadmap","founder","press"];

export default function Navbar(){
  const [active,setActive]=useState("about");
  const [progress,setProgress]=useState(0);

  useEffect(()=>{
    const onScroll=()=>{
      const y=window.scrollY;
      const h=document.body.scrollHeight - window.innerHeight;
      setProgress(h>0 ? (y/h)*100 : 0);

      const top = y + 96;
      let cur = "about";
      for(const id of NAV){
        const el=document.getElementById(id);
        if(el && el.offsetTop <= top) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll",onScroll,{passive:true});
    onScroll();
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="fixed top-0 left-0 h-[2px] bg-accent2" style={{width:progress+"%"}} />
      <div className="backdrop-blur bg-bg/70 border-b border-line">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center">
              <img src="/noxis-logo.svg" alt="Noxis" className="h-14 md:h-16" />
            </a>
            <span className="text-[11px] px-2 py-[2px] rounded-md bg-accent/10 border border-accent text-accent font-medium tracking-wide">
              Secure Vision Suite
            </span>
          </div>

          <div className="hidden md:flex gap-6 text-sm">
            {NAV.map(id=>(
              <a key={id} href={`#${id}`} className="relative">
                <span className={`${active===id?"text-accent2":"text-mute"} transition`}>{id}</span>
                {active===id && (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent2" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
