import { Decimal } from "@prisma/client/runtime"

export default interface IProducto{
    id?: number 
    nombre : string 
    descripcion : string 
    precio_unitario : Decimal,
    activo: boolean
}