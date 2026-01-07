import { Router } from "express";
import getSong from "../controller/getSongController.js"
const router : Router = Router();

router.get("/", (req,res)=> {
    console.log("heelo from router")
    const song = getSong();
    res.send(song);
})

export default router;