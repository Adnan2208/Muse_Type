import getSong,{type Song} from "../axios";
import { useEffect,useState } from "react";

function RandomSong(){

const [songState,setSongState] = useState<null | Song>()
useEffect(() => {
    const fetchSong = async () => {
      const song : Song = await getSong();
      setSongState(song)
    }
    fetchSong();
  },[])

const totalSong = songState?.Lyric.slice(0,600)
const actualSong = totalSong?.slice(0,totalSong.lastIndexOf(" "))

return(
  <>
    <div className="flex items-center">
      <div className="px-16 py-8 flex items-center text-gray-700 font-mono text-2xl max-w-5xl w-full text-center leading-relaxed rounded-2xl shadow-lg mx-auto">
        {
          actualSong
        }
      </div>
    </div>
  </>
)
}

export default RandomSong;