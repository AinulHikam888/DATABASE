-- CreateTable
CREATE TABLE `Sensor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ph` DOUBLE NOT NULL,
    `tds` INTEGER NOT NULL,
    `suhu` DOUBLE NOT NULL,
    `lembab` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
