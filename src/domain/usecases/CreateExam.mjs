import pdfReader from '../entities/PdfReader.mjs'

export default class CreateExam {
    constructor(examController, examRepository, fileRepository) {
        this.examController = examController
        this.examRepository = examRepository
        this.fileRepository = fileRepository
    }

    async execute() {
        try {
            const examData = this.examController.getData()
            const fileBuffer = await this.fileRepository.getFile(examData.file)
            const content = await pdfReader.read(fileBuffer)
            examData.content = content
            examData.date = this.now()
            const savedExam = await this.examRepository.save(examData)
            this.examController.sendSuccess(savedExam)
        } catch (err) {
            this.examController.sendError(err)
        }
    }

    now() {
        return new Date()
    }
}
