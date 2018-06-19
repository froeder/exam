import {Exam} from '../model/Exam.mjs'

class ExamRepository {
    async save(examData) {
        const exam = new Exam(examData)
        return exam.save()
    }
}

export default new ExamRepository()
