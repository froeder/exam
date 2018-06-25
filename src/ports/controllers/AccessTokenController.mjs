export default class AccessTokenController {
    constructor(req, res, next) {
        this.req = req
        this.res = res
        this.next = next
    }

    getParams(){
        this.req.params
    }

    getData() {
        return this.req.body
    }

    sendSuccess(createExam) {
        this.res.json(createExam)
    }

    sendError(err) {
        this.next(err)
    }
}
