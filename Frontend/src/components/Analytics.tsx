import { maxTime } from "./RandomSong";

interface countInterface{
    correctCount : number,
    wrongCount : number,
    onReset : () => void
}

function Analytics({correctCount,wrongCount,onReset} : countInterface){
    const totalCount = correctCount + wrongCount;
    const correctPercentage = totalCount > 0 ? Math.round(((correctCount / totalCount) * 100)) : 0
    const wrongPercentage = 100 - correctPercentage
    const typingSpeedWPM = Math.round((correctCount/5) / (maxTime / 60)); // Can be adjusted to totalCount and adding another box for accuracy.


    return(
        <div className="w-full flex flex-col justify-center items-center gap-1">
        <section className="flex flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center justify-center bg-black rounded-xl shadow-lg px-12 py-8 min-w-50 border border-emerald-500/20">
                <div className="text-emerald-600 text-sm font-semibold tracking-wider mb-2">CORRECT</div>
                <div className="text-white text-5xl font-bold mb-2">{correctPercentage}%</div>
                <div className="text-slate-400 text-sm">({correctCount}/{totalCount})</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-black rounded-xl shadow-lg px-12 py-8 min-w-50 border border-red-600/20">
                <div className="text-red-600 text-sm font-semibold tracking-wider mb-2">WRONG</div>
                <div className="text-white text-5xl font-bold mb-2">{wrongPercentage}%</div>
                <div className="text-slate-400 text-sm">({wrongCount}/{totalCount})</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-black rounded-xl shadow-lg px-12 py-8 min-w-50 border border-blue-500/20">
                <div className="text-blue-500 text-sm font-semibold tracking-wider mb-2">SPEED</div>
                <div className="text-white text-5xl font-bold mb-2">{typingSpeedWPM}</div>
                <div className="text-slate-400 text-sm">WPM</div>
            </div>
        </section>
        <button onClick={onReset} className="text-white bg-black p-2 border border-emerald-500/20 rounded-xl m-3 cursor-pointer hover:border-emerald-600">Reset</button>
        </div>
    )
}

export default Analytics