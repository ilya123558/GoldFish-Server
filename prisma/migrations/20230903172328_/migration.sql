/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cotalog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "EnumProductAvailability" AS ENUM ('available', 'forOrdering', 'unavailable');

-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_cotalogUrl_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_categoryUrl_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_cotalogUrl_fkey";

-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "cotalog";

-- DropTable
DROP TABLE "event";

-- DropTable
DROP TABLE "product";

-- CreateTable
CREATE TABLE "Cotalog" (
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Cotalog_pkey" PRIMARY KEY ("url")
);

-- CreateTable
CREATE TABLE "Category" (
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "cotalogUrl" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("url")
);

-- CreateTable
CREATE TABLE "Event" (
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("url")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "cotalogUrl" TEXT NOT NULL,
    "categoryUrl" TEXT NOT NULL,
    "ageLimit" INTEGER NOT NULL,
    "imgSrcList" TEXT[],
    "playersFrom" INTEGER NOT NULL,
    "playersTo" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "timeFrom" INTEGER NOT NULL,
    "timeTo" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "rules" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "availability" "EnumProductAvailability" NOT NULL,
    "discount" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FAQ" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_cotalogUrl_fkey" FOREIGN KEY ("cotalogUrl") REFERENCES "Cotalog"("url") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_cotalogUrl_fkey" FOREIGN KEY ("cotalogUrl") REFERENCES "Cotalog"("url") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryUrl_fkey" FOREIGN KEY ("categoryUrl") REFERENCES "Category"("url") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FAQ" ADD CONSTRAINT "FAQ_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
