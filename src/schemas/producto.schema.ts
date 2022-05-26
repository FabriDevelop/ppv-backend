import Joi from 'joi'

const id = Joi.number().integer()
const nombre = Joi.string()
const descripcion = Joi.string()
const precioUnitario = Joi.number()
const activo = Joi.boolean()

const crearProductoSchema = Joi.object({
  nombre: nombre.required(),
  descripcion: descripcion.optional(),
  precio_unitario: precioUnitario.required(),
  activo: activo.optional()
})

const obtenerProductoSchema = Joi.object({
  id: id.required()
})

const editarProductoSchema = Joi.object({
  nombre,
  descripcion,
  precioUnitario,
  activo
})

export { obtenerProductoSchema, crearProductoSchema, editarProductoSchema }
