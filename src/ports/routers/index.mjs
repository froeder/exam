import express from 'express'
import examRepository from '../../adapters/repository/ExamRepository.mjs'
import fileRepository from '../../adapters/repository/FileRepository.mjs'
import ExamController from '../controllers/ExamController.mjs'
import CreateExam from '../../domain/usecases/CreateExam.mjs'

export default function getRouter() {
    function createExam(req, res, next) {
        const examController = new ExamController(req, res, next)
        const createExam = new CreateExam(examController, examRepository, fileRepository)
        createExam.execute()
    }

    const router = express.Router()
    router.post('/exams', (req, res, next) => createExam(req, res, next))
    return router
}
