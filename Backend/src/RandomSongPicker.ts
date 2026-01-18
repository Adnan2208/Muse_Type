import Allsongs from "../dataExtraction/AllSongs.json" with { type: "json" };

const AllSongsLength = Allsongs.length;
export type Song = {
    Title: string,
    Lyric: string
}

function RandomSongPickerFunction(){
    let RandomSongIndex: number = Math.floor(Math.random() * AllSongsLength);
    const song: Song[] = Allsongs as Song[]
    return song[RandomSongIndex]
}
export default RandomSongPickerFunction;
