import mongoose from 'mongoose'

const AccessTokenSchema = new mongoose.Schema({
    patientEmail: {type: String, required: true},
    key: {type: String, required: true},
    createAt: {type: Date, required: true},
    expirationAt: {type: Date, required: true}
})

export const AccessToken = mongoose.model('AccessToken', AccessTokenSchema)
