-- AlterTable
ALTER TABLE `Compra` MODIFY `activo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `MateriaPrima` MODIFY `activo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Pedido` MODIFY `activo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Produccion` MODIFY `activo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Proveedor` MODIFY `activo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Venta` MODIFY `activo` BOOLEAN NOT NULL DEFAULT true;
