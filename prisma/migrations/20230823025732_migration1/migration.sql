-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cotalog" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "cotalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "cotalogId" INTEGER,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cotalog" ADD CONSTRAINT "cotalog_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_cotalogId_fkey" FOREIGN KEY ("cotalogId") REFERENCES "cotalog"("id") ON DELETE SET NULL ON UPDATE CASCADE;
