-- DropForeignKey
ALTER TABLE "ApartmentExtra" DROP CONSTRAINT "ApartmentExtra_apartmentId_fkey";

-- AddForeignKey
ALTER TABLE "ApartmentExtra" ADD FOREIGN KEY ("apartmentId") REFERENCES "Apartment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
