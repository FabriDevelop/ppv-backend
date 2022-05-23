import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()




class DatabaseService<T> {
    async create(data : T, entityName: string): Promise<T>{
        //@ts-ignore
        const createdRow = await prisma[entityName].create({ data });
        return createdRow;
    }

    async delete(id:number, entityName: string):Promise<T>{
        //@ts-ignore
        const deletedRow = await prisma[entityName].update({
            where : { id},
            data: { activo : false}
        })

        return deletedRow
    }

    async update(id:number, entityName: string, changes: T){
        //@ts-ignore
        const updatedRow =  await prisma[entityName].update({
            where : { id},
            data: { ...changes}
        })

        return updatedRow
    }

    async get(entityName: string):Promise<T>{
        //@ts-ignore
        const getRows =  await prisma[entityName].findMany({
            where : { activo : true }
        })

        return getRows
    }


}

export default DatabaseService