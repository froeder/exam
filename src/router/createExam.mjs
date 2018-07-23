import express from 'express'
import Responder from 'src/common/Responder.mjs'
import CreateExam from 'src/business/usecase/CreateExam.mjs'

const router = express.Router()
router.post('/mvp/exams', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const createExam = new CreateExam()
    createExam.execute(req.body, responder)
})

export default router
