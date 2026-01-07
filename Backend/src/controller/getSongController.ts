import song, {Song} from "../RandomSongPicker.js"

function getSong() : Song{
    console.log("Heelo Controller hit");
    return song;
}

export default getSong;