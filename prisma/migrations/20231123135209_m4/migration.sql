/*
  Warnings:

  - You are about to drop the column `activationLink` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isActivated` on the `User` table. All the data in the column will be lost.
  - Added the required column `status` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnumUserStatus" AS ENUM ('pending', 'active');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "activationLink",
DROP COLUMN "isActivated",
ADD COLUMN     "accessToken" TEXT,
ADD COLUMN     "activationEmailString" TEXT,
ADD COLUMN     "refreshToken" TEXT,
ADD COLUMN     "status" "EnumUserStatus" NOT NULL;
