import express, { Application } from 'express'
import ClienteRouter from '../routes/clientes.router'
import ProductoRouter from '../routes/producto.router'
import ProveedorRouter from '../routes/proveedor.router'
import EmpleadoRouter from '../routes/empleado.router'


export default function routerApi(app: Application) {
  const router = express.Router()

  app.use('/api', router)

  router.use('/clientes', ClienteRouter)
  router.use('/producto', ProductoRouter)
  router.use('/empleado', EmpleadoRouter)
  router.use('/proveedor', ProveedorRouter)

}
