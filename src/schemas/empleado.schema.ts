import Joi from 'joi'

const id = Joi.number().integer()
const nombre = Joi.string()
const apellido = Joi.string()
const cedula = Joi.string()
const telefono = Joi.string()
const direccion = Joi.string()
const correo = Joi.string()
const clave = Joi.string()
const rol = Joi.string()
const activo = Joi.boolean()

const createEmployeeSchema = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.optional(),
  cedula: cedula.required(),
  telefono: telefono.required(),
  direccion: direccion.optional(),
  correo: correo.required(),
  clave: clave.required(),
  rol: rol.required()
})

const getEmployeeSchema = Joi.object({
  id: id.required()
})

const editEmployeeSchema = Joi.object({
  nombre,
  apellido,
  cedula,
  telefono,
  direccion,
  correo,
  clave,
  rol,
  activo
})

export { editEmployeeSchema, getEmployeeSchema, createEmployeeSchema }
