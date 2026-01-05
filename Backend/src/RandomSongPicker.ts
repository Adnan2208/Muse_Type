import Allsongs from "../dataExtraction/AllSongs.json" with {type : "json"}

const AllSongsLenght = Allsongs.length;
export type Song = {
    Title: string,
    Lyric: string
}

let RandomSongIndex: number = Math.floor(Math.random() * AllSongsLenght);
const song: Song[] = Allsongs as Song[]

export default song[RandomSongIndex]
