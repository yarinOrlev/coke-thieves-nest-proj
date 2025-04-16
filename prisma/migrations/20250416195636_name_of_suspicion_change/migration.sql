/*
  Warnings:

  - You are about to drop the column `suspicionLevel` on the `Thief` table. All the data in the column will be lost.
  - Added the required column `levelOfSuspicion` to the `Thief` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Thief" DROP COLUMN "suspicionLevel",
ADD COLUMN     "levelOfSuspicion" "SuspicionLevel" NOT NULL;
