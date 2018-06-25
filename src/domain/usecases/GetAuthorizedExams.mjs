export default class GetAuthorizedExams {
    constructor(examController, examRepository, accessTokenRepository) {
        this.examController = examController
        this.examRepository = examRepository
        this.accessTokenRepository = accessTokenRepository
    }

    async execute() {
        try {
            const key = this.examController.getParams()[0]
            const accessToken = await this.accessTokenRepository.getByTokenKey(key)
            if (accessToken) {
                const exams = await this.examRepository.getExamByPacient(accessToken.pacientEmail)
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
