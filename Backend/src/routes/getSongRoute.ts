import { Router } from "express";
import getSong from "../controller/getSongController.js"
const router : Router = Router();

router.get("/", (req,res)=> {
    const song = getSong();
    res.send(song);
})

export default router;