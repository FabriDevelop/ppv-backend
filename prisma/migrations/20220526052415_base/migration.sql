-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `cedula` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Cliente_cedula_key`(`cedula`),
    UNIQUE INDEX `Cliente_telefono_key`(`telefono`),
    UNIQUE INDEX `Cliente_direccion_key`(`direccion`),
    UNIQUE INDEX `Cliente_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empleado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_usuario` VARCHAR(191) NOT NULL,
    `clave` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `cedula` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Empleado_cedula_key`(`cedula`),
    UNIQUE INDEX `Empleado_telefono_key`(`telefono`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proveedor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `cedula` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Proveedor_cedula_key`(`cedula`),
    UNIQUE INDEX `Proveedor_telefono_key`(`telefono`),
    UNIQUE INDEX `Proveedor_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MateriaPrima` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `precio_unitario` DECIMAL(65, 30) NOT NULL,
    `existencias` INTEGER NOT NULL,
    `existencias_minimas` INTEGER NOT NULL,
    `id_proveedor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_empleado` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetalleCompra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `compra_id` INTEGER NOT NULL,
    `id_materia_prima` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `descuento` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produccion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_inicio` DATETIME(3) NOT NULL,
    `fecha_finalizacion` DATETIME(3) NOT NULL,
    `costo_mano_de_obra` DECIMAL(65, 30) NOT NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetalleProduccion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_produccion` INTEGER NOT NULL,
    `materia_prima_id` INTEGER NOT NULL,
    `cantidad_utilizada` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `detalle_pedido` VARCHAR(191) NOT NULL,
    `id_empleado` INTEGER NOT NULL,
    `id_cliente` INTEGER NOT NULL,
    `id_produccion` INTEGER NOT NULL,
    `precio_pedido` DECIMAL(65, 30) NOT NULL,
    `dinero_abonado` DECIMAL(65, 30) NOT NULL,
    `fecha_pedido` DATETIME(3) NOT NULL,
    `fecha_entrega` DATETIME(3) NOT NULL,
    `cancelado` BOOLEAN NOT NULL DEFAULT false,
    `activo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MateriaPrima` ADD CONSTRAINT `MateriaPrima_id_proveedor_fkey` FOREIGN KEY (`id_proveedor`) REFERENCES `Proveedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compra` ADD CONSTRAINT `Compra_id_empleado_fkey` FOREIGN KEY (`id_empleado`) REFERENCES `Empleado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleCompra` ADD CONSTRAINT `DetalleCompra_id_materia_prima_fkey` FOREIGN KEY (`id_materia_prima`) REFERENCES `MateriaPrima`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleCompra` ADD CONSTRAINT `DetalleCompra_compra_id_fkey` FOREIGN KEY (`compra_id`) REFERENCES `Compra`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleProduccion` ADD CONSTRAINT `DetalleProduccion_materia_prima_id_fkey` FOREIGN KEY (`materia_prima_id`) REFERENCES `MateriaPrima`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleProduccion` ADD CONSTRAINT `DetalleProduccion_id_produccion_fkey` FOREIGN KEY (`id_produccion`) REFERENCES `Produccion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_id_empleado_fkey` FOREIGN KEY (`id_empleado`) REFERENCES `Empleado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_id_produccion_fkey` FOREIGN KEY (`id_produccion`) REFERENCES `Produccion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
