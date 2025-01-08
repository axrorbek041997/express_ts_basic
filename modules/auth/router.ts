import { Router } from "express";
const router = Router()
import * as controller from './controller.js';

router.post('/login', controller.login)

export default router;
