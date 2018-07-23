import express from 'express'
import Responder from 'src/common/Responder.mjs'
import GenerateToken from 'src/business/usecase/GenerateToken.mjs'

const router = express.Router()
router.post('/mvp/exams/generateToken/:patientEmail', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const generateToken = new GenerateToken()
    generateToken.execute(req.params, responder)
})

export default router
