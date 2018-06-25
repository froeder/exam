import express from 'express'
import examRepository from '../../adapters/repository/ExamRepository.mjs'
import accessTokenRepository from '../../adapters/repository/AccessTokenRepository.mjs'
import fileRepository from '../../adapters/repository/FileRepository.mjs'

import ExamController from '../controllers/ExamController.mjs'
import AccessTokenController from '../controllers/AccessTokenController.mjs'

import CreateExam from '../../domain/usecases/CreateExam.mjs'
import GenerateToken from '../../domain/usecases/GenerateToken.mjs'
import GetMyExams from '../../domain/usecases/GetMyExams.mjs'
import GetAuthorizedExams from '../../domain/usecases/GetAuthorizedExams.mjs'

export default function getRouter() {
    function createExam(req, res, next) {
        const controller = new ExamController(req, res, next)
        const usecase = new CreateExam(controller, examRepository, fileRepository)
        usecase.execute()
    }

    function generateToken(req, res, next) {
        const controller = new AccessTokenController(req, res, next)
        const usecase = new GenerateToken(controller, accessTokenRepository)
        usecase.execute()
    }

    function getMyExams(req, res, next) {
        const controller = new ExamController(req, res, next)
        const usecase = new GetMyExams(controller, examRepository)
        usecase.execute()
    }

    function getAuthorizedExams(req, res, next) {
        const controller = new ExamController(req, res, next)
        const usecase = new GetAuthorizedExams(controller, examRepository, accessTokenRepository)
        usecase.execute()
    }

    const router = express.Router()
    router.post('/exams', (req, res, next) => createExam(req, res, next))
    router.post('/exams/generateToken', (req, res, next) => generateToken(req, res, next))
    router.get('/exams/mine/:pacientEmail', (req, res, next) => getMyExams(req, res, next))
    router.get('/exams/authorized/:accessTokenKey', (req, res, next) => getAuthorizedExams(req, res, next))

    return router
}
