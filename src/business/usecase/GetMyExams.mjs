import examRepository from 'src/repository/ExamRepository.mjs'

export default class GetMyExams {
    async execute(params, responder) {
        try {
            const patientEmail = params.patientEmail
            const exams = await examRepository.getExamByPatient(patientEmail)
            responder.success(exams)
        } catch (err) {
            responder.error(err)
        }
    }
}
