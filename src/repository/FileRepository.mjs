import axios from 'axios'
import environment from '../common/environment.mjs'

class FileRepository {
    async getFile(filename) {
        try {
            const url = `${environment.services.file}/${filename}`
            const response = await axios({url: url, method: 'GET'})
            return Buffer.from(response.data)
        } catch (err) {
            throw err
        }
    }
}

export default new FileRepository()
