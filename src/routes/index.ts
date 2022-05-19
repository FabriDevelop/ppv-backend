import express, { Application } from 'express'

import ClienteRouter from '../routes/clientes.router'

export default function routerApi(app: Application) {
  const router = express.Router()

  app.use('/api', router)

  router.use('/clientes', ClienteRouter)
}
