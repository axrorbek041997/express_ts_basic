import { Router } from "express";
const router = Router()

// routers
import authRouter from './auth/router.js'

router.use('/auth', authRouter)

export default router;
