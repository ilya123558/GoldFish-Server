/*
  Warnings:

  - The primary key for the `BasketToProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "BasketToProduct" DROP CONSTRAINT "BasketToProduct_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "BasketToProduct_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "BasketToProduct_id_seq";
