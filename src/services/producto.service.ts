import { PrismaClient } from '@prisma/client'
import IProducto from '../interfaces/IProducto'

const prisma = new PrismaClient()

class ProductoService {

  async create(data: IProducto) {
    const newProduct = await prisma.producto.create({ data })
    return newProduct;
  }

  async update(id: number, cambios: IProducto):Promise<IProducto> {
    const updatedProduct = await prisma.producto.update({
      where: {
        id
      },
      data: {
        ...cambios
      }
    })
    return updatedProduct
  }

  async get(){
    const products = await prisma.producto.findMany({
        where : { activo : true}
    });
    
    return products;
  }

  async delete(id:number){
    const deletedProduct = await prisma.producto.update({
        where : { id },
        data : { activo : false }
    });

    return deletedProduct
  }

}

export default ProductoService
