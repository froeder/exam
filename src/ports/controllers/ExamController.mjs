export default class ExamController {
    constructor(req, res, next) {
        this.req = req
        this.res = res
        this.next = next
    }

    getParam(paramName){
        return this.req.params[paramName]
    }

    getData() {
        return this.req.body
    }

    sendSuccess(createExam) {
        this.res.json(createExam)
    }

    sendNotFound() {
        this.res.sendStatus(404)
    }

    sendError(err) {
        this.next(err)
    }
}
