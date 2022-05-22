import Joi from "joi";
const id = Joi.number().integer()
const nombre = Joi.string()
const descripcion = Joi.string()
const precio_unitario = Joi.number()
const activo = Joi.boolean()

const crearProductoSchema = Joi.object({
    nombre: nombre.required(),
    descripcion: descripcion.optional(),
    precio_unitario: precio_unitario.required(),
    activo : activo.optional()
})

const obtenerProductoSchema = Joi.object({
    id: id.required()
})

const editarProductoSchema = Joi.object({
    nombre,
    descripcion,
    precio_unitario,
    activo
})

export { obtenerProductoSchema, crearProductoSchema, editarProductoSchema }


