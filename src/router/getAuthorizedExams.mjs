import express from 'express'
import Responder from 'src/common/Responder.mjs'
import GetAuthorizedExams from 'src/business/usecase/GetAuthorizedExams.mjs'

const router = express.Router()
router.get('/mvp/exams/authorized/:accessTokenKey', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const getAuthorizedExams = new GetAuthorizedExams()
    getAuthorizedExams.execute(req.params, responder)
})

export default router
