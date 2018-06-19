import request from 'supertest'
import mongoose from 'mongoose'
import serverPromise from '../main.mjs'
import {utils} from '@codate/commons'

describe('ExamRouter', () => {
    let server = null

    before((done) => {
        serverPromise.then((httpServer) => {
            server = httpServer
            done()
        })
    })

    after(() => {
        server.close()
    })

    beforeEach(() => {
        utils.db.clear()
    })

    it('deve criar um novo exame quando todos os atributos forem informados', (done) => {
        const examData = {patientEmail: 'test5@test.com.br', type: 'Exame sangue'}
        request(server)
            .post('/api/exams')
            .send(examData)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200)
                expect(res.body).to.have.property('_id')
                done()
            })
    })
})
