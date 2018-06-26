import {AccessToken} from '../model/AccessToken.mjs'

class AccessTokenRepository {
    async save(data) {
        const createdModel = new AccessToken(data)
        return createdModel.save()
    }

    async getByTokenKey(key) {
        console.log(key)
        return AccessToken.find({key: key}).exec()
        //, expirationAt: {'$gte': new Date()}
    }
}

export default new AccessTokenRepository()
