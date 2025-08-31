export default function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-label="Noxis logo">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#1EE9A6"/>
          <stop offset="1" stopColor="#FFCC55"/>
        </linearGradient>
      </defs>
      <path d="M32 4 56 18v28L32 60 8 46V18z" fill="none" stroke="#1F3046" strokeWidth="2"/>
      <path d="M22 44V20l20 24V20" fill="none" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
