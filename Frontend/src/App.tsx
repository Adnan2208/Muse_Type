import getSong, { type Song } from "./axios";
import { useEffect,useState } from "react";
function App(){

const [songState,setSongState] = useState<null | Song>()

useEffect(() => {
    const fetchSong = async () => {
      const song : Song = await getSong();
      setSongState(song)
    }
    fetchSong();
},[])

  return (
    <>
    <p>The song is as follows:</p>
    <div className="p-2 m-2 text-lg text-black">
      {songState?.Lyric}
    </div>
    </>
  )
}

export default App;