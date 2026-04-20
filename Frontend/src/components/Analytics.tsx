import { maxTime } from "./RandomSong";

interface countInterface {
  correctCount: number;
  wrongCount: number;
  onReset: () => void;
}

function Analytics({ correctCount, wrongCount, onReset }: countInterface) {
  const totalCount = correctCount + wrongCount;
  const correctPercentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const wrongPercentage = 100 - correctPercentage;
  const typingSpeedWPM = Math.round((correctCount / 5) / (maxTime / 60));

  const stats = [
    {
      label: "ACCURACY",
      value: `${correctPercentage}%`,
      sub: `${correctCount}/${totalCount}`,
      color: "emerald",
      gradient: "from-emerald-400 to-teal-400",
      border: "border-emerald-500/20",
      shadow: "shadow-emerald-500/10",
    },
    {
      label: "ERRORS",
      value: `${wrongPercentage}%`,
      sub: `${wrongCount}/${totalCount}`,
      color: "rose",
      gradient: "from-rose-400 to-orange-400",
      border: "border-rose-500/20",
      shadow: "shadow-rose-500/10",
    },
    {
      label: "SPEED",
      value: `${typingSpeedWPM}`,
      sub: "WPM",
      color: "cyan",
      gradient: "from-cyan-400 to-blue-400",
      border: "border-cyan-500/20",
      shadow: "shadow-cyan-500/10",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8 animate-[fadeIn_0.5s_ease-out]">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-white tracking-tight">Time's Up</h2>
        <p className="text-slate-400 text-sm">Here is how you performed</p>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-4xl px-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`
              relative flex-1 w-full md:w-auto flex flex-col items-center justify-center 
              bg-white/5 backdrop-blur-md rounded-3xl px-8 py-10 
              border ${stat.border} ${stat.shadow} shadow-2xl
              transition-all duration-500 hover:scale-105 hover:bg-white/10
              group overflow-hidden
            `}
          >
            {/* Background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            
            <div className={`text-xs font-bold tracking-[0.2em] mb-4 text-${stat.color}-400`}>
              {stat.label}
            </div>
            
            <div className={`text-6xl font-black bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
              {stat.value}
            </div>
            
            <div className="text-slate-500 text-sm font-medium tracking-wide">
              {stat.sub}
            </div>
          </div>
        ))}
      </section>

      <button
        onClick={onReset}
        className="
          group relative px-8 py-4 bg-white/5 backdrop-blur-md border border-emerald-500/30 
          rounded-2xl text-emerald-400 font-semibold tracking-wide
          transition-all duration-300 hover:scale-105 hover:bg-emerald-500/10 
          hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]
          active:scale-95
        "
      >
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </span>
      </button>
    </div>
  );
}

export default Analytics;