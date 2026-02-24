import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import WhatIs from "./sections/WhatIs";
import Principles from "./sections/Principles";
import How from "./sections/How";
import Audience from "./sections/Audience";
import Technology from "./sections/Technology";
import Ecosystem from "./sections/Ecosystem";
import Founder from "./sections/Founder";

function Wrap({id,title,children}:{id:string;title:string;children:React.ReactNode}){
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section__title">{title}</h2>
        <div className="mt-3">{children}</div>
      </div>
    </section>
  );
}

export default function App(){
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 96 }}>
        <section id="top" className="section"><div className="container"><Hero /></div></section>
        <Wrap id="about" title="What is Noxis"><WhatIs /></Wrap>
        <Wrap id="principles" title="Key Principles"><Principles /></Wrap>
        <Wrap id="how" title="How Noxis Works"><How /></Wrap>
        <Wrap id="audience" title="Audience (Who it’s for)"><Audience /></Wrap>
        <Wrap id="technology" title="Technology (high-level)"><Technology /></Wrap>
        <Wrap id="ecosystem" title="Lucien Ecosystem"><Ecosystem /></Wrap>
        <Wrap id="founder" title="About the Founder"><Founder /></Wrap>
      </main>
      <Footer />
    </>
  );
}
