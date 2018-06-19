import mongoose from 'mongoose'

const ExamSchema = new mongoose.Schema({
    patientEmail: {type: String, required: true},
    type: {type: String, required: true}
})

export const Exam = mongoose.model('Exam', ExamSchema)
