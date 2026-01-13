import RandomSongPickerFunction, {Song} from "../RandomSongPicker.js"

function getSong() : Song{
    return RandomSongPickerFunction();
}

export default getSong;