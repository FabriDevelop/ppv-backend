import { NextFunction, Request, Response, Router } from 'express'
import IEmpleado from '../interfaces/IEmpleado'
import validatorHandler from '../middleware/validator.handler'
import {
  editEmployeeSchema,
  getEmployeeSchema,
  createEmployeeSchema
} from '../schemas/empleado.schema'

import EmpleadoService from '../services/empleado.service'

const router = Router()
const service = new EmpleadoService()

router.post(
  '/',
  validatorHandler(createEmployeeSchema, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: IEmpleado = req.body
      const createdEmployee = await service.create(body)
      res.json(createdEmployee)
    } catch (error) {
      next(error)
    }
  }
)

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const employees = await service.get()
    res.json(employees)
  } catch (error) {
    next(error)
  }
})

router.delete(
  '/:id',
  validatorHandler(getEmployeeSchema, 'params'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deletedEmployee = await service.delete(Number(req.params.id))
      res.json(deletedEmployee)
    } catch (error) {
      next(error)
    }
  }
)

router.patch(
  '/:id',
  [
    validatorHandler(getEmployeeSchema, 'params'),
    validatorHandler(editEmployeeSchema, 'body')
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const body: IEmpleado = req.body
      res.status(201).json(await service.update(Number(id), body))
    } catch (error) {
      next(error)
    }
  }
)

export default router
