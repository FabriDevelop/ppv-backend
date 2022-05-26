import Joi from 'joi'

const id = Joi.number().integer()
const nombre = Joi.string()
const apellido = Joi.string()
const cedula = Joi.string()
const telefono = Joi.string()
const direccion = Joi.string()
const correo = Joi.string()
const activo = Joi.string()

export const createSupplier = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.optional(),
  cedula: cedula.required(),
  telefono: telefono.required(),
  direccion: direccion.optional(),
  correo: correo.optional()
})

export const getSupplierSchema = Joi.object({
  id: id.required()
})

export const editSupplierSchema = Joi.object({
  nombre,
  apellido,
  cedula,
  telefono,
  direccion,
  correo,
  activo
})
