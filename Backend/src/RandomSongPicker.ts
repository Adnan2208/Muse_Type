import Allsongs from "../dataExtraction/AllSongs.json" with {type : "json"}

type Song = {
    Title: string,
    Lyric: string
}

let RandomSongIndex: number = Math.floor(Math.random() * 318);
const songsArray: Song[] = Allsongs as Song[]

export default songsArray[RandomSongIndex]
