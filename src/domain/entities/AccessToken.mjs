import moment from 'moment'

class AccessToken {
    generate(pacientEmail) {
        return {
            pacientEmail: pacientEmail,
            key: this.getTokenKey(),
            createAt: this.getNow(),
            expirationAt: this.getExpiration()
        }
    }

    getTokenKey() {
        const number_1 = Math.floor((Math.random() * 10) + 1)
        const number_2 = Math.floor((Math.random() * 10) + 1)
        const number_3 = Math.floor((Math.random() * 10) + 1)
        let charsAcessToken = ''
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        for (var i = 0; i < 3; i++) {
            charsAcessToken += possible.charAt(Math.floor(Math.random() * possible.length))
        }

        return charsAcessToken + number_1 + number_2 + number_3
    }

    getNow() {
        return moment().toDate()
    }

    getExpiration() {
        return moment().add(7, 'd')._d
    }
}

const accessToken = new AccessToken()
export default accessToken

