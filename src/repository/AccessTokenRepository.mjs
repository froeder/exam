import {AccessToken} from './AccessToken.mjs'

class AccessTokenRepository {
    async save(data) {
        const createdModel = new AccessToken(data)
        return createdModel.save()
    }

    async getByTokenKey(key) {
        return AccessToken.find({key: key}).exec()
    }
}

export default new AccessTokenRepository()
