export default class CreateExam {
    constructor(examController, examRepository) {
        this.examController = examController
        this.examRepository = examRepository
    }

    async execute() {
        try {
            const examData = this.examController.getData()
            const savedExam = await this.examRepository.save(examData)
            this.examController.sendSuccess(savedExam)
        } catch (err) {
            this.examController.sendError(err)
        }
    }
}
