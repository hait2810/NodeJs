import express from 'express'
import { byPassCaptcha } from '../controllers/byPassCaptcha'
const router = express.Router()


router.get("/captcha", byPassCaptcha)

export default router