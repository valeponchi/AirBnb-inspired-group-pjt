/*
  Warnings:

  - You are about to alter the column `firstName` on the `UserInfo` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `lastName` on the `UserInfo` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.

*/
-- DropIndex
DROP INDEX "ApartmentLocation.apartmentId_unique";

-- DropIndex
DROP INDEX "UserInfo.userId_unique";

-- AlterTable
ALTER TABLE "ApartmentExtra" ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ApartmentLocation" ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UserInfo" ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "firstName" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "lastName" SET DATA TYPE VARCHAR(20),
ADD PRIMARY KEY ("id");

-- RenameIndex
ALTER INDEX "ApartmentExtra.apartmentId_unique" RENAME TO "ApartmentExtra_apartmentId_unique";
