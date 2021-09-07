-- DropForeignKey
ALTER TABLE "ApartmentLocation" DROP CONSTRAINT "ApartmentLocation_apartmentId_fkey";

-- AddForeignKey
ALTER TABLE "ApartmentLocation" ADD FOREIGN KEY ("apartmentId") REFERENCES "Apartment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
