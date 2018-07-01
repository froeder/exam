import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'

import createExam from 'src/router/createExam.mjs'
import generateToken from 'src/router/generateToken.mjs'
import getAuthorizedExams from 'src/router/getAuthorizedExams.mjs'
import getMyExams from 'src/router/getMyExams.mjs'
import errorHandler from 'src/common/errorHandler.mjs'

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(createExam)
app.use(generateToken)
app.use(getAuthorizedExams)
app.use(getMyExams)
app.use(errorHandler)

export default app
