import pdfReader from '../entity/PdfReader.mjs'
import fileRepository from 'src/repository/FileRepository.mjs'
import examRepository from 'src/repository/ExamRepository.mjs'

export default class CreateExam {
    async execute(examData, responder) {
        try {
            // if (examData.file) {
            //     examData.content = await this.getFileContent(examData.file)
            // }
            examData.date = new Date()
            const savedExam = await examRepository.save(examData)
            responder.success(savedExam)
        } catch (err) {
            responder.error(err)
        }
    }

    async getFileContent(file) {
        const fileBuffer = await fileRepository.getFile(file)
        return pdfReader.read(fileBuffer)
    }
}
