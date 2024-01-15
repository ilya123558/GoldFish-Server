/*
  Warnings:

  - Added the required column `date` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paid` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "paid" BOOLEAN NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
