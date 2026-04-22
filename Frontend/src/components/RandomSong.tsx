import getSong, { type Song } from "../axios";
import { useEffect, useState, useRef } from "react";
import Analytics from "./Analytics";

export const maxTime = 15;

function RandomSong() {
const [songState, setSongState] = useState<null | Song>(null);
const [i, setI] = useState<number>(0);
const [isRight, setIsRight] = useState<boolean[]>([]);
const divRef = useRef<HTMLDivElement>(null);
const songRef = useRef<Song | null>(null);

  const [time, setTime] = useState<number>(maxTime);
  const timerStartedRef = useRef<boolean>(false);
  const intervalRef = useRef<number | null>(null);

async function reset(): Promise<void> {
setI(0);
setIsRight([]);
setTime(maxTime);
timerStartedRef.current = false;

if (intervalRef.current) {
clearInterval(intervalRef.current);
intervalRef.current = null;
}

const song: Song = await getSong();
songRef.current = song;
setSongState(song);
divRef.current?.focus();
}

useEffect(() => {
const fetchSong = async () => {
const song: Song = await getSong();
songRef.current = song;
setSongState(song);
};
fetchSong();
divRef.current?.focus();

return () => {
if (intervalRef.current) {
clearInterval(intervalRef.current);
}
};
}, []);

  const songCharLimit = 600;
  const totalSong = songState?.Lyric.slice(0, songCharLimit);
  const actualSong = totalSong;

  const correctCount = isRight.filter(Boolean).length;
  const wrongCount = isRight.length - correctCount;
  const progress = actualSong ? (i / actualSong.length) * 100 : 0;

  function checkIfCorrect(e: React.KeyboardEvent) {
    if (!timerStartedRef.current) {
      timerStartedRef.current = true;

      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    const key = e.key;
    if (key === actualSong?.[i]) {
      setIsRight((prev) => prev.concat(true));
    } else {
      setIsRight((prev) => prev.concat(false));
    }
    setI((i) => i + 1);
  }

  const timerColor = time > 10 ? "text-emerald-400" : time > 5 ? "text-yellow-400" : "text-rose-400";
  const timerBorder = time > 10 ? "border-emerald-500/30" : time > 5 ? "border-yellow-500/30" : "border-rose-500/30";

  return (
    <>
      <section className="flex-1 min-h-0 flex flex-col items-center justify-center px-4 py-4 md:py-6 gap-4 overflow-hidden">
        
        {/* Top HUD */}
        {time > 0 && actualSong && (
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 animate-[fadeIn_0.5s_ease-out] shrink-0">
            {/* Timer Pill */}
            <div className={`
              flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full 
              bg-white/5 backdrop-blur-md border ${timerBorder}
              shadow-lg transition-colors duration-500
            `}>
              <svg className={`w-4 h-4 md:w-5 md:h-5 ${timerColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={`text-xl md:text-2xl font-mono font-bold ${timerColor} tabular-nums`}>
                {time}s
              </span>
            </div>

            {/* Progress Pill */}
            <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
              <span className="text-slate-400 text-xs md:text-sm font-medium">Progress</span>
              <div className="w-24 md:w-32 h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-slate-300 text-xs md:text-sm font-mono tabular-nums">{Math.round(progress)}%</span>
            </div>
          </div>
        )}

        {/* Main Card */}
        <div
          className={`
            relative flex-1 min-h-0 w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden
            ${time === 0 
              ? 'bg-transparent border-0 shadow-none' 
              : 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50'
            }
          `}
        >
          {time !== 0 && <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent z-20" />}
          
          <div
            className={`
              h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]
              py-6 px-4 md:py-10 md:px-12 lg:px-16 flex font-mono text-lg md:text-xl lg:text-2xl
              w-full leading-relaxed items-start gap-0 outline-none border-0
              flex-wrap bg-transparent relative z-10
              ${time === 0 ? 'justify-center items-center' : 'text-slate-600'}
            `}
            onKeyDown={time === 0 ? undefined : (e) => checkIfCorrect(e)}
            tabIndex={0}
            ref={divRef}
          >
            {time === 0 ? (
              <Analytics correctCount={correctCount} wrongCount={wrongCount} onReset={reset} />
            ) : (
              actualSong?.split("").map((char, index) => {
                let colorClass = "text-slate-600";
                let transformClass = "";

                if (index < i) {
                  colorClass = isRight[index] 
                    ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' 
                    : 'text-rose-500 bg-rose-500/10 rounded px-[1px]';
                  transformClass = "scale-100";
                }

                if (index === i) {
                  return (
                    <span key={index} className="flex items-center relative">
                      <span className="absolute -left-[2px] text-emerald-400 animate-pulse font-light select-none">
                        ┃
                      </span>
                      <span className={`${colorClass} transition-all duration-150 ml-[8px]`}>
                        {char === " " ? "\u00A0" : char}
                      </span>
                    </span>
                  );
                }

return (
<span
key={index}
className={`${colorClass} ${transformClass} transition-colors duration-150`}
>
{char === " " ? "\u00A0" : char}
</span>
);
              })
            )}
          </div>
        </div>

        {/* Footer hint */}
        {time !== 0 && (
          <p className="text-slate-500 text-xs md:text-sm animate-pulse shrink-0">
            Click the text area and start typing to begin
          </p>
        )}
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

export default RandomSong;