/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `cotalog` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryTitle` on the `cotalog` table. All the data in the column will be lost.
  - You are about to drop the column `cotalogTitle` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "cotalog" DROP CONSTRAINT "cotalog_categoryTitle_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_cotalogTitle_fkey";

-- AlterTable
ALTER TABLE "category" DROP CONSTRAINT "category_pkey",
ADD CONSTRAINT "category_pkey" PRIMARY KEY ("url");

-- AlterTable
ALTER TABLE "cotalog" DROP CONSTRAINT "cotalog_pkey",
DROP COLUMN "categoryTitle",
ADD COLUMN     "categoryUrl" TEXT,
ADD CONSTRAINT "cotalog_pkey" PRIMARY KEY ("url");

-- AlterTable
ALTER TABLE "product" DROP COLUMN "cotalogTitle",
ADD COLUMN     "cotalogUrl" TEXT;

-- AddForeignKey
ALTER TABLE "cotalog" ADD CONSTRAINT "cotalog_categoryUrl_fkey" FOREIGN KEY ("categoryUrl") REFERENCES "category"("url") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_cotalogUrl_fkey" FOREIGN KEY ("cotalogUrl") REFERENCES "cotalog"("url") ON DELETE SET NULL ON UPDATE CASCADE;
