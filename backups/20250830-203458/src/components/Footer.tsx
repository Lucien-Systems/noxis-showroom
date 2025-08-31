export default function Footer(){
  return (
    <footer className="footer section">
      <div className="container" style={{display:"grid",gap:24,gridTemplateColumns:"1.4fr 1fr 1fr 1fr"}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            <img src="/vite.svg" alt="Noxis" style={{height:18}}/><strong>NOXIS</strong>
          </div>
          <p className="text-mute">Rights-first OSINT & analysis suite. Synthetic demo, no live data.</p>
        </div>
        <div>
          <strong>Contact</strong>
          <ul className="text-mute" style={{marginLeft:18}}>
            <li><a href="mailto:media@noxis.ai">media@noxis.ai</a></li>
            <li><a href="#press">Press & media</a></li>
          </ul>
        </div>
        <div>
          <strong>Links</strong>
          <ul className="text-mute" style={{marginLeft:18}}>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
          </ul>
        </div>
        <div>
          <strong>Legal</strong>
          <ul className="text-mute" style={{marginLeft:18}}>
            <li>WCAG AA contrast</li>
            <li>Auditability by design</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
