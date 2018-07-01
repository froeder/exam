import mongoose from 'mongoose'

const ExamSchema = new mongoose.Schema({
    patientEmail: {type: String, required: true},
    type: {type: String, required: true},
    date: {type: Date, required: true},
    file: {type: String, required: false},
    content: {type: String, required: false}
})

export const Exam = mongoose.model('Exam', ExamSchema)
