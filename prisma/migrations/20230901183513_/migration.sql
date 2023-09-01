/*
  Warnings:

  - You are about to drop the column `categoryUrl` on the `cotalog` table. All the data in the column will be lost.
  - Added the required column `ageLimit` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryUrl` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgSrc` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playersFrom` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playersTo` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeFrom` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeTo` to the `product` table without a default value. This is not possible if the table is not empty.
  - Made the column `cotalogUrl` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "cotalog" DROP CONSTRAINT "cotalog_categoryUrl_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_cotalogUrl_fkey";

-- AlterTable
ALTER TABLE "category" ADD COLUMN     "cotalogUrl" TEXT;

-- AlterTable
ALTER TABLE "cotalog" DROP COLUMN "categoryUrl";

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "ageLimit" INTEGER NOT NULL,
ADD COLUMN     "categoryUrl" TEXT NOT NULL,
ADD COLUMN     "discount" INTEGER,
ADD COLUMN     "imgSrc" TEXT NOT NULL,
ADD COLUMN     "oldPrice" INTEGER,
ADD COLUMN     "playersFrom" INTEGER NOT NULL,
ADD COLUMN     "playersTo" INTEGER NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "product" TEXT NOT NULL,
ADD COLUMN     "timeFrom" INTEGER NOT NULL,
ADD COLUMN     "timeTo" INTEGER NOT NULL,
ALTER COLUMN "cotalogUrl" SET NOT NULL;

-- CreateTable
CREATE TABLE "event" (
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("url")
);

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_cotalogUrl_fkey" FOREIGN KEY ("cotalogUrl") REFERENCES "cotalog"("url") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_cotalogUrl_fkey" FOREIGN KEY ("cotalogUrl") REFERENCES "cotalog"("url") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_categoryUrl_fkey" FOREIGN KEY ("categoryUrl") REFERENCES "category"("url") ON DELETE RESTRICT ON UPDATE CASCADE;
