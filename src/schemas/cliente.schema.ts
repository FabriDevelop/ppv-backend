import Joi from 'joi'

const id = Joi.number().integer()
const nombre = Joi.string().min(3).max(30)
const apellido = Joi.string().min(3).max(30)
const cedula = Joi.string().min(14).max(14)
const telefono = Joi.string().min(8).max(15)
const direccion = Joi.string().min(5).max(125)
const correo = Joi.string().min(5).max(75)

const crearClienteSchema = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.required(),
  cedula: cedula.required(),
  telefono: telefono.required(),
  direccion: direccion.required(),
  correo: correo.required()
})

const obtenerClienteSchema = Joi.object({
  id: id.required()
})

const editarClienteSchema = Joi.object({
  nombre,
  apellido,
  cedula,
  telefono,
  direccion,
  correo
})

export { crearClienteSchema, obtenerClienteSchema, editarClienteSchema }
