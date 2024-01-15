/*
  Warnings:

  - You are about to drop the `OrderToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderToUser" DROP CONSTRAINT "OrderToUser_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderToUser" DROP CONSTRAINT "OrderToUser_userId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "OrderToUser";

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
