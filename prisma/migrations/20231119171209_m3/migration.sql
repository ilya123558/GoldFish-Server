/*
  Warnings:

  - Added the required column `name` to the `Basket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE basket_id_seq;
ALTER TABLE "Basket" ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('basket_id_seq');
ALTER SEQUENCE basket_id_seq OWNED BY "Basket"."id";
