import express,{ Application } from "express"
import cors,{CorsOptions} from "cors"
import router from "./routes/getSongRoute.js";

const app: Application = express()
const PORT : number = Number(process.env.PORT) || 8080;

const corsOptions : CorsOptions = {
    origin : process.env.FRONTEND_URL || "http://localhost:5173"
}

app.use(cors(corsOptions));
app.use("/",router);


app.listen(PORT,():void =>{
    console.log(`Express App started at port ${PORT}`)
})