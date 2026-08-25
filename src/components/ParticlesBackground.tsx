export default function ParticlesBackground() {
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-[#2ecc71]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            bottom: '-10px',
            opacity: 0.6,
            boxShadow: '0 0 8px 2px rgba(46,204,113,0.6)',
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          50% { transform: translateY(-50vh) translateX(10px); }
          90% { opacity: 0.4; }
          100% { transform: translateY(-100vh) translateX(-10px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
