import getSong,{type Song} from "../axios";
import { useEffect,useState,useRef } from "react";

function RandomSong(){

const [songState,setSongState] = useState<null | Song>()
const [i, setI] = useState<number>(0)
const divRef = useRef<HTMLDivElement>(null)

useEffect(() => {
    const fetchSong = async () => {
      const song : Song = await getSong();
      setSongState(song)
    }
    fetchSong();
  },[])

useEffect(() => {
  divRef.current?.focus();
}, [])

const totalSong = songState?.Lyric.slice(0,600)
const actualSong = totalSong?.slice(0,totalSong.lastIndexOf(" "))


function checkIfCorrect(e : React.KeyboardEvent){
  const key = e.key;
  if (key === actualSong?.[i]) {
    console.log(key);
  } else {
    console.log("wrong");
  }
  setI(i => i+1);
}

return(
  <>
    <section className="flex items-center">
      <div className="py-8 px-16 flex text-black font-mono text-2xl max-w-5xl w-full leading-relaxed rounded-2xl shadow-lg mx-auto bg-orange-50 items-start gap-0 outline-none border-0 flex-wrap whitespace-pre" onKeyDown={(e) => checkIfCorrect(e)} tabIndex={0} ref={divRef}>
        <span className="cursor-blink">┃</span>

        {/* Fix by converting each word to a span rather than single characters */}
        {
          actualSong?.split("").map((char,i) => { 
            return(
            <span key={i} className="">{char}</span>)
        })
        }

      </div>
    </section>
  </>
)
}

export default RandomSong;