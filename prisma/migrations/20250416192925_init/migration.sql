-- CreateEnum
CREATE TYPE "SuspicionLevel" AS ENUM ('Low', 'Medium', 'High');

-- CreateTable
CREATE TABLE "Thief" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "suspicionLevel" "SuspicionLevel" NOT NULL,
    "dateOfSuspicion" TEXT NOT NULL,
    "dateOfLastUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Thief_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Thief_name_key" ON "Thief"("name");
