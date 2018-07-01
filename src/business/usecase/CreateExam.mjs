import pdfReader from '../entity/PdfReader.mjs'
import fileRepository from 'src/repository/FileRepository.mjs'
import examRepository from 'src/repository/ExamRepository.mjs'

export default class CreateExam {
    async execute(examData, responder) {
        try {
            if (examData.file) {
                const fileBuffer = await fileRepository.getFile(examData.file)
                const content = await pdfReader.read(fileBuffer)
                examData.content = content
            }
            examData.date = new Date()
            const savedExam = await examRepository.save(examData)
            responder.success(savedExam)
        } catch (err) {
            responder.error(err)
        }
    }
}
