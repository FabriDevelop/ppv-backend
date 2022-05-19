import { NextFunction, Response } from 'express'
import { Schema } from 'joi'

const boom = require('@hapi/boom')

export default function validatorHandler(schema: Schema, property: string) {
  return (req: any, res: Response, next: NextFunction) => {
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false })
    if (error) {
      next(boom.badRequest(error))
    }
    next()
  }
}
