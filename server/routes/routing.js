import express from "express"
import {getClients} from "../controllers/routing.js"

const router = express.Router()

router.get("/clients",getClients)
export default router