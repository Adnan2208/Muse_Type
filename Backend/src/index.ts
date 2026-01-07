import express,{ Application } from "express"
import router from "./routes/getSongRoute.js";

const app: Application = express()

const PORT:number = 8080;

app.use("/",router);

app.listen(PORT,():void =>{
    console.log(`Express App started at port ${PORT}`)
})