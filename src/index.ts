import express, { Request, Response } from 'express'
import routerApi from './routes'
import cors from 'cors'
import {
  logErrors,
  errorHandler,
  boomErrorHandler
} from './middleware/error.handler'

const app = express()

app.use(express.json())
app.use(cors())

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.get('/', async (req: Request, res: Response) => {
  res.json({ msg: 'Hola mundo' })
})

app.listen(4000, () => {
  console.log('🟢 Server running on port 4000 ')
})
