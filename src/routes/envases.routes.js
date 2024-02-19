import { Router } from 'express'
import { getEnvase, createEnvase, updateEnvase, deleteEnvase } from '../controllers/envases.controller.js'

const router = Router()

router.get('/employees', getEnvase)
router.post('/employees', createEnvase)
router.put('/employees', updateEnvase)
router.delete('/employees', deleteEnvase)

export default router