import { PrismaClient } from '@prisma/client'
import ICliente from '../interfaces/ICliente'

const prisma = new PrismaClient()

class ClienteService {
  async create(data: any): Promise<ICliente> {
    const clienteNuevo = await prisma.cliente.create({ data })
    return clienteNuevo
  }
}

export default ClienteService
