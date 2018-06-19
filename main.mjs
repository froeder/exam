import {runner} from '@codate/commons'
import routers from './src/ports/routers'

const config = {
    url: process.env.URL || 'mongodb://localhost/exam',
    port: process.env.PORT || 8084
}

export default runner(config, routers())
