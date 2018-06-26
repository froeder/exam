import axios from 'axios'

class FileRepository {
    async getFile(filename) {
        const {data} = await axios({url: `http://localhost:/api/files/${filename}`, method: 'GET', responseType: 'arraybuffer'})
        return new Buffer(data, 'binary')
    }
}

export default new FileRepository()
