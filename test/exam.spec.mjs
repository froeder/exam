import request from 'supertest'
import app from 'src/index.mjs'
import Server from 'src/common/Server.mjs'
import environment from 'src/common/environment.mjs'
import logger from 'src/common/logger.mjs'

describe('ExamRouter', () => {
    before((done) => {
        const server = new Server(app, environment)
        server.start()
            .then(() => {
                logger.info('Server started')
                done()
            })
            .catch(err => logger.error('Error on starting server %s', err))
    })

    it('deve criar um novo exame quando todos os atributos forem informados', (done) => {
        const examData = {patientEmail: 'test5@test.com.br', type: 'Exame sangue'}
        request(app)
            .post('/api/exams')
            .send(examData)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200)
                expect(res.body).to.have.property('_id')
                done()
            })
    })
})
