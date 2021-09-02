-- CreateEnum
CREATE TYPE "Role" AS ENUM ('guest', 'host');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'guest',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInfo" (
    "userId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Apartment" (
    "id" SERIAL NOT NULL,
    "priceNight" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "maxPeopleIn" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postCode" TEXT NOT NULL,
    "road" TEXT NOT NULL,
    "imageUrl1" TEXT NOT NULL,
    "imageUrl2" TEXT,
    "imageUrl3" TEXT,
    "userOwnerId" INTEGER NOT NULL,
    "userRentingId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApartmentLocation" (
    "latitude" INTEGER NOT NULL,
    "longitude" INTEGER NOT NULL,
    "apartmentId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ApartmentExtra" (
    "wifi" BOOLEAN,
    "smartTV" BOOLEAN,
    "microwave" BOOLEAN,
    "coffeeMaker" BOOLEAN,
    "hotTub" BOOLEAN,
    "parkingSpace" BOOLEAN,
    "garden" BOOLEAN,
    "pool" BOOLEAN,
    "gym" BOOLEAN,
    "apartmentId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo.userId_unique" ON "UserInfo"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ApartmentLocation.apartmentId_unique" ON "ApartmentLocation"("apartmentId");

-- CreateIndex
CREATE UNIQUE INDEX "ApartmentExtra.apartmentId_unique" ON "ApartmentExtra"("apartmentId");

-- AddForeignKey
ALTER TABLE "UserInfo" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Apartment" ADD FOREIGN KEY ("userOwnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Apartment" ADD FOREIGN KEY ("userRentingId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApartmentLocation" ADD FOREIGN KEY ("apartmentId") REFERENCES "Apartment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApartmentExtra" ADD FOREIGN KEY ("apartmentId") REFERENCES "Apartment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
