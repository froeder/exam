export default class ExamController {
    constructor(req, res, next) {
        this.req = req
        this.res = res
        this.next = next
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
