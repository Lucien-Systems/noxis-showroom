export default function WhatIs(){
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card p-6">
        <h3 className="text-xl font-semibold m-0">What is Noxis</h3>
        <p className="text-mute mt-2">
          Noxis is an AI-powered OSINT & narrative-intelligence demo designed for targeted, transparent and auditable protection of the information space.
        </p>
      </div>
      <div className="card p-6">
        <h3 className="text-xl font-semibold m-0">Rights-first, not mass scanning</h3>
        <p className="text-mute mt-2">
          No blanket tracking of populations. Purpose limitation, minimization and verifiable audit receipts baked in by design.
        </p>
      </div>
    </div>
  );
}
