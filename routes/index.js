import { Router } from "express";
import queensRoutes from "./queens.js";


const router = Router();

router.get("/", (req, res) => res.send("This is the Drag Race api root!"));

router.use("/queens", queensRoutes);


export default router;