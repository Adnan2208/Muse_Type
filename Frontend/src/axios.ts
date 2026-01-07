import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL+ import.meta.env.VITE_PORT || "hola"

export type Song = {
    Title : string,
    Lyric : string
}

async function getSong():Promise<Song>{
    const song : Song = (await axios.get("/")).data;
    return song;
}

export default getSong;