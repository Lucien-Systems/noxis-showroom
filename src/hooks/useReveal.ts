import { useEffect } from 'react';

export default function useReveal(){
  useEffect(()=>{
    const els = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[];
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('is-visible');
          io.unobserve(e.target as Element);
        }
      });
    },{ threshold:0.15 });
    els.forEach(el=>io.observe(el));
    return ()=> io.disconnect();
  },[]);
}
