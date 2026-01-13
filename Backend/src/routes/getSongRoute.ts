import { Router } from "express";
import getSong from "../controller/getSongController.js"
const router : Router = Router();

router.get("/", (req,res)=> {
    res.send(getSong());
})

export default router;