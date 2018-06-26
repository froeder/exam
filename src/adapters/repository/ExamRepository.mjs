import {Exam} from '../model/Exam.mjs'

class ExamRepository {
    async save(examData) {
        const exam = new Exam(examData)
        return exam.save()
    }

    async getExamByPatient(patientEmail) {
        return Exam.find({patientEmail: patientEmail}).exec()
    }
}

export default new ExamRepository()
