import express from 'express'
import Responder from 'src/common/Responder.mjs'
import GetMyExams from 'src/business/usecase/GetMyExams.mjs'

const router = express.Router()
router.get('/mvp/exams/mine/:patientEmail', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const getMyExams = new GetMyExams()
    getMyExams.execute(req.params, responder)
})

export default router
