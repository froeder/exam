import accessTokenRepository from 'src/repository/AccessTokenRepository.mjs'
import examRepository from 'src/repository/ExamRepository.mjs'

export default class GetAuthorizedExams {
    async execute(params, responder) {
        try {
            const key = params.accessTokenKey
            const accessToken = await accessTokenRepository.getByTokenKey(key)
            if (accessToken[0]) {
                const exams = await examRepository.getExamByPatient(accessToken[0].patientEmail)
                responder.success(exams)
            } else {
                responder.notFound()
            }
        } catch (err) {
            responder.error(err)
        }
    }
}
