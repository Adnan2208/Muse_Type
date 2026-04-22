import Navbar from "./components/Navbar";
import RandomSong from "./components/RandomSong";

function App() {
  return (
    <div className="h-screen w-full bg-slate-950 relative overflow-hidden flex flex-col selection:bg-emerald-500/30">
      {/* Ambient background glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
      
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        <RandomSong />
      </div>
    </div>
  );
}

export default App;