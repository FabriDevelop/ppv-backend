import { PrismaClient } from '@prisma/client'
import IEmpleado from '../interfaces/IEmpleado'

const prisma = new PrismaClient()

class EmpleadoService {

    async create(data: IEmpleado): Promise<IEmpleado>{
        const employeeCreated = await prisma.empleado.create({ data });
        return employeeCreated
    }

    async get(){
        const  employees = await prisma.empleado.findMany({
            where : { activo : true }
        })

        return employees
    }

    async delete(id:number){
        const deletedEmployee = await prisma.empleado.update({
            where : { id },
            data : { activo :  false}
        })

        return deletedEmployee
    }

    async update(id:number, changes: IEmpleado){
        const updatedEmployee = await prisma.empleado.update({
            where : { id },
            data : { ...changes }
        })

        return updatedEmployee
    }
}

export default EmpleadoService