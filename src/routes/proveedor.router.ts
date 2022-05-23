import { NextFunction, Request, Response, Router } from 'express'
import IProveedor from '../interfaces/IProveedor';
import validatorHandler from '../middleware/validator.handler'
import {
    createSupplier,
    getSupplierSchema,
    editSupplierSchema
} from '../schemas/proveedor.schema';
import DatabaseService from '../services/database.service';
import databaseService from '../services/database.service';

const router = Router();
const service = new DatabaseService();

router.post('/',
    validatorHandler(createSupplier, 'body'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body: IProveedor = req.body;
            const createdSupplier = await service.create(body, 'proveedor')
            res.json(createdSupplier);
        } catch (error) {
            next(error)
        }
    }
)

router.get('/',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const suppliers = await service.get('proveedor')
            res.json(suppliers)
        } catch (error) {
            next(error)
        }
    }
)

router.delete('/:id',
    validatorHandler(getSupplierSchema, 'params'),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const deletedSupplier = await service.delete(Number(req.params.id), 'proveedor')
            res.json(deletedSupplier)
        } catch (error) {
            next(error)
        }
    }
)

router.patch('/:id', [
    validatorHandler(getSupplierSchema, 'params'),
    validatorHandler(editSupplierSchema, 'body')
    ],
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const body:IProveedor = req.body;
            res.status(201).json(await service.update(Number(id),'proveedor',body));
        } catch (error) {
            next(error)
        }
    }
)


export default router;
