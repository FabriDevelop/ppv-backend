import { PrismaClient } from '@prisma/client'
import ICliente from '../interfaces/ICliente'

const prisma = new PrismaClient()

class ClienteService {
  async create(data: ICliente): Promise<ICliente> {
    const clienteNuevo = await prisma.cliente.create({ data })
    return clienteNuevo
  }

  async update(id: number, cambios: ICliente):Promise<ICliente> {
    console.log(cambios)
    const clienteActualizado = await prisma.cliente.update({
      where: {
        id
      },
      data: {
        ...cambios
      }
    })
    console.log(clienteActualizado)
    return clienteActualizado
  }
}

export default ClienteService
