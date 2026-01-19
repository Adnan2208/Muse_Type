import getSong,{type Song} from "../axios";
import { useEffect,useState,useRef } from "react";

function RandomSong(){

const [songState,setSongState] = useState<null | Song>()
const [i, setI] = useState<number>(0)
const [isRight,setIsRight] = useState<boolean[]>([])
const divRef = useRef<HTMLDivElement>(null)

useEffect(() => {
    const fetchSong = async () => {
      const song : Song = await getSong();
      setSongState(song)
    }
    fetchSong();
    divRef.current?.focus();
  },[])


const totalSong = songState?.Lyric.slice(0,600)
const actualSong = totalSong?.slice(0,totalSong.lastIndexOf(" "))


function checkIfCorrect(e : React.KeyboardEvent){
  const key = e.key;
  if (key === actualSong?.[i]) {
    setIsRight((prev) => prev.concat(true));
  } else {
    setIsRight((prev) => prev.concat(false));
  }
  setI(i => i+1);
}

return(
  <>
    <section className="flex items-center">
      <div className="py-8 px-16 flex text-slate-700 font-mono text-2xl max-w-5xl w-full leading-relaxed rounded-2xl shadow-lg mx-auto items-start gap-0 outline-none border-0 flex-wrap whitespace-pre bg-transparent" onKeyDown={(e) => checkIfCorrect(e)} tabIndex={0} ref={divRef}>

        {
          actualSong?.split("").map((char, index) => {
            let colorClass = "";
            if (index < i) {
              colorClass = isRight[index] ? 'text-white' : 'text-red-600';
            }

            if (index === i) {
              return (
                <span key={index} className="flex items-center">
                  <span className="cursor-blink">┃</span>
                  <span className={colorClass}>{char}</span>
                </span>
              )
            }
            return (
              <span key={index} className={colorClass}>{char}</span>
            )
          })
        }

      </div>
    </section>
  </>
)
}

export default RandomSong;