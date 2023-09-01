/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `category` table. All the data in the column will be lost.
  - The primary key for the `cotalog` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryId` on the `cotalog` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `cotalog` table. All the data in the column will be lost.
  - You are about to drop the column `cotalogId` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "cotalog" DROP CONSTRAINT "cotalog_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_cotalogId_fkey";

-- AlterTable
ALTER TABLE "category" DROP CONSTRAINT "category_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "category_pkey" PRIMARY KEY ("title");

-- AlterTable
ALTER TABLE "cotalog" DROP CONSTRAINT "cotalog_pkey",
DROP COLUMN "categoryId",
DROP COLUMN "id",
ADD COLUMN     "categoryTitle" TEXT,
ADD CONSTRAINT "cotalog_pkey" PRIMARY KEY ("title");

-- AlterTable
ALTER TABLE "product" DROP COLUMN "cotalogId",
ADD COLUMN     "cotalogTitle" TEXT;

-- AddForeignKey
ALTER TABLE "cotalog" ADD CONSTRAINT "cotalog_categoryTitle_fkey" FOREIGN KEY ("categoryTitle") REFERENCES "category"("title") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_cotalogTitle_fkey" FOREIGN KEY ("cotalogTitle") REFERENCES "cotalog"("title") ON DELETE SET NULL ON UPDATE CASCADE;
