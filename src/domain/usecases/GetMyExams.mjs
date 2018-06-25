export default class GetMyExams {
    constructor(examController, examRepository) {
        this.examController = examController
        this.examRepository = examRepository
    }

    async execute() {
        try {
            const pacientEmail = this.examController.getParams()[0]
            const exams = await this.examRepository.getExamByPacient(pacientEmail)
            this.examController.sendSuccess(exams)
        } catch (err) {
            this.examController.sendError(err)
        }
    }
}
