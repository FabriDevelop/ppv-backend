/*
  Warnings:

  - Added the required column `activo` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activo` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activo` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activo` to the `MateriaPrima` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activo` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activo` to the `Produccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activo` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activo` to the `Proveedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activo` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cliente` ADD COLUMN `activo` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Compra` ADD COLUMN `activo` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Empleado` ADD COLUMN `activo` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `MateriaPrima` ADD COLUMN `activo` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Pedido` ADD COLUMN `activo` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Produccion` ADD COLUMN `activo` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Producto` ADD COLUMN `activo` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Proveedor` ADD COLUMN `activo` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Venta` ADD COLUMN `activo` BOOLEAN NOT NULL;
