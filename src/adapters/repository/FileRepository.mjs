import axios from 'axios'

class FileRepository {
    async getFile(filename) {
        const {data} = await axios({url: `http://localhost://api/files/${filename}`, method: 'GET', responseType: 'blob'})
        // return new Blob([data])
        return data
    }
}

export default new FileRepository()
