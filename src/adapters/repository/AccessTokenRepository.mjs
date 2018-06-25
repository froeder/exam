import {AccessToken} from '../model/AccessToken.mjs'

class AccessTokenRepository {
    async save(data) {
        const createdModel = new AccessToken(data)
        return createdModel.save()
    }

    async getByTokenKey(key) {
        return AccessToken.find({key: key, expirationAt: {'$lte': new Date()}})
    }
}

export default new AccessTokenRepository()
