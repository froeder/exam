import moment from 'moment'

class AccessToken {
    generate(patientEmail) {
        return {
            patientEmail: patientEmail,
            key: this.getTokenKey(),
            createAt: this.getNow(),
            expirationAt: this.getExpiration()
        }
    }

    getTokenKey() {
        const number1 = Math.floor((Math.random() * 10) + 1)
        const number2 = Math.floor((Math.random() * 10) + 1)
        const number3 = Math.floor((Math.random() * 10) + 1)
        let charsAcessToken = ''
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        for (var i = 0; i < 3; i++) {
            charsAcessToken += possible.charAt(Math.floor(Math.random() * possible.length))
        }

        return charsAcessToken + number1 + number2 + number3
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
