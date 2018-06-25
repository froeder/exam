import accessToken from '../entities/AccessToken.mjs'

export default class GenerateToken {
    constructor(accessTokenController, accessTokenRepository) {
        this.accessTokenController = accessTokenController
        this.accessTokenRepository = accessTokenRepository
    }

    async execute() {
        try {
            const email = this.accessTokenController.getData()
            const accessTokenData = accessToken.generate(email)
            const createToken = await this.accessTokenRepository.save(accessTokenData)
            this.accessTokenController.sendSuccess(createToken)
        } catch (err) {
            this.accessTokenController.sendError(err)
        }
    }
}
