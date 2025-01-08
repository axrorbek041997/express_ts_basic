import express from 'express'
import envVars from './config/env.js'
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import router from './modules/router.js'
import ErrorHandlerMiddleware from './utils/middlewares/error-handler.js'

const app = express()

app.use(express.json());
app.use(helmet());
app.use(cors())
app.use(compression())

app.use('/api', router)
app.use(ErrorHandlerMiddleware);

app.listen(+envVars.PORT!, () => console.log(`App running at ${envVars.PORT}`))
