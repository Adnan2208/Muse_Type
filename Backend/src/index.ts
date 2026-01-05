import express,{ Application } from "express"
import song, {Song} from "./RandomSongPicker.js"

const app: Application = express()

const PORT:number = 8000;

app.get("/", (req,res) => {
    res.send(song);
    })

app.listen(PORT,():void =>{
    console.log(`Express App started at port ${PORT}`)
})