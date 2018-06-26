export default class GetAuthorizedExams {
    constructor(examController, examRepository, accessTokenRepository) {
        this.examController = examController
        this.examRepository = examRepository
        this.accessTokenRepository = accessTokenRepository
    }

    async execute() {
        try {
            const key = this.examController.getParam('accessTokenKey')
            const accessToken = await this.accessTokenRepository.getByTokenKey(key)
            if (accessToken[0]) {
                const exams = await this.examRepository.getExamByPatient(accessToken[0].patientEmail)
                this.examController.sendSuccess(exams)
            }
            else {
                this.examController.sendNotFound()
            }
        } catch (err) {
            this.examController.sendError(err)
        }
    }
}
