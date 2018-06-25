import pdfText from 'pdf-text'

export default class PdfReader {
    static async read(fileBuffer) {
        return new Promise((resolve, reject) => {
            pdfText(fileBuffer, (err, chunks) => {
                if (err) return reject(err)
                const allString = chunks.join()
                resolve(allString)
            })
        })
    }
}
