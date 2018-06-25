import {Exam} from '../model/Exam.mjs'

class ExamRepository {
    async save(examData) {
        const exam = new Exam(examData)
        return exam.save()
    }

    async getExamByPacient(pacientEmail) {
        return Exam.find({pacientEmail: pacientEmail})
    }
}

export default new ExamRepository()
