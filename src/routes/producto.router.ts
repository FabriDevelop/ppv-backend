import { NextFunction, Request, Response, Router } from 'express'
import IProducto from '../interfaces/IProducto'
import validatorHandler from '../middleware/validator.handler'
import {
  crearProductoSchema,
  obtenerProductoSchema,
  editarProductoSchema
} from '../schemas/producto.schema'
import ProductoService from '../services/producto.service'

const router = Router()
const service = new ProductoService()

router.post(
  '/',
  validatorHandler(crearProductoSchema, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: IProducto = req.body
      const createdProduct = await service.create(body)
      res.json(createdProduct)
    } catch (error) {
      next(error)
    }
  }
)

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await service.get()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.delete(
  '/:id',
  validatorHandler(obtenerProductoSchema, 'params'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deletedProduct = await service.delete(Number(req.params.id))
      res.json(deletedProduct)
    } catch (error) {
      next(error)
    }
  }
)

router.patch(
  '/:id',
  [
    validatorHandler(obtenerProductoSchema, 'params'),
    validatorHandler(editarProductoSchema, 'body')
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const body = req.body
      res.status(201).json(await service.update(Number(id), body))
    } catch (error) {
      next(error)
    }
  }
)

export default router
