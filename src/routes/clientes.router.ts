import express, { NextFunction, Request, Response } from 'express'
import ICliente from '../interfaces/ICliente'
import validatorHandler from '../middleware/validator.handler'
import {
  crearClienteSchema,
  obtenerClienteSchema,
  editarClienteSchema
} from '../schemas/cliente.schema'
import ClienteService from '../services/cliente.service'

const router = express.Router()
const service = new ClienteService()

router.post(
  '/',
  validatorHandler(crearClienteSchema, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: ICliente = req.body
      const clienteCreado = await service.create(body)
      res.json(clienteCreado)
    } catch (error) {
      next(error)
    }
  }
)

router.patch(
  '/:id',
  validatorHandler(obtenerClienteSchema, 'params'),
  validatorHandler(editarClienteSchema, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const body = req.body
      console.log(id, body)
      res.status(201).json(await service.update(Number(id), body))
    } catch (error) {
      next(error)
    }
  }
)

export default router
