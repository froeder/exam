import packageJson from '../../package.json'

export default {
    app: {
        name: packageJson.name,
        version: packageJson.version
    },

    services: {
        file: process.env.URL_FILE_SERVICE || 'http://localhost/api/files'
    },

    db: {
        url: process.env.DB_URL || 'mongodb://localhost/exam'
    },

    server: {
        port: process.env.PORT || 8083
    }
}
