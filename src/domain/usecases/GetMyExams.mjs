export default class GetMyExams {
    constructor(examController, examRepository) {
        this.examController = examController
        this.examRepository = examRepository
    }

    async execute() {
        try {
            const patientEmail = this.examController.getParam('patientEmail')
            const exams = await this.examRepository.getExamByPatient(patientEmail)
            this.examController.sendSuccess(exams)
        } catch (err) {
            this.examController.sendError(err)
        }
    }
}
