import axios from 'axios'
import environment from '../common/environment.mjs'

class FileRepository {
    async getFile(filename) {
        const {data} = await axios({url: `${environment.services.file}/${filename}`, method: 'GET', responseType: 'arraybuffer'})
        return Buffer.alloc(data)
    }
}

export default new FileRepository()
