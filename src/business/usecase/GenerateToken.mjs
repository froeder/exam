import accessToken from '../entity/AccessToken.mjs'
import accessTokenRepository from 'src/repository/AccessTokenRepository.mjs'

export default class GenerateToken {
    async execute(params, responder) {
        try {
            const email = params.patientEmail
            const accessTokenData = accessToken.generate(email)
            const createToken = await accessTokenRepository.save(accessTokenData)
            responder.success(createToken)
        } catch (err) {
            responder.error(err)
        }
    }
}
