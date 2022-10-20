import { Router } from "express"
import * as controllers from "../controllers/queens.js"

const router = Router()

router.get("/", controllers.getQueens)
router.get("/:id", controllers.getQueen)
router.post("/", controllers.createQueen)
router.put("/:id", controllers.updateQueen)
router.delete("/:id", controllers.deleteQueen)

export default router