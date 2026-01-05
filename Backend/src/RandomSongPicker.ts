import Allsongs from "../dataExtraction/AllSongs.json" with {type : "json"}

const AllSongsLenght = Allsongs.length;
type Song = {
    Title: string,
    Lyric: string
}

let RandomSongIndex: number = Math.floor(Math.random() * AllSongsLenght);
const songsArray: Song[] = Allsongs as Song[]

export default songsArray[RandomSongIndex]
