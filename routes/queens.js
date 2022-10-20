import { Router } from "express"
import * as controllers from "../controllers/queens.js"

const router = Router()

router.get("/", controllers.getQueens)
router.get("/:id", controllers.getQueen)
router.get("/name/:name", controllers.getQueenName)
router.get("/order/:order", controllers.getQueenOrder)
router.post("/", controllers.createQueen)
router.put("/:id", controllers.updateQueen)
router.put("/name/:name", controllers.updateQueenByName)
router.put("/order/:order", controllers.updateQueenByOrder)
router.delete("/:id", controllers.deleteQueen)
router.delete("/name/:name", controllers.deleteQueenByName)
router.delete("/order/:order", controllers.deleteQueenByOrder)

export default router