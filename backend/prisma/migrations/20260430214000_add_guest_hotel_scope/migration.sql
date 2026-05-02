ALTER TABLE "Guest" ADD COLUMN "hotelId" TEXT;

UPDATE "Guest" g
SET "hotelId" = r."hotelId"
FROM (
  SELECT DISTINCT ON ("guestId") "guestId", "hotelId"
  FROM "Reservation"
  ORDER BY "guestId", "createdAt" DESC
) r
WHERE g."id" = r."guestId";

UPDATE "Guest"
SET "hotelId" = (SELECT "id" FROM "Hotel" ORDER BY "createdAt" ASC LIMIT 1)
WHERE "hotelId" IS NULL;

ALTER TABLE "Guest" ALTER COLUMN "hotelId" SET NOT NULL;

CREATE INDEX "Guest_hotelId_name_idx" ON "Guest"("hotelId", "name");
CREATE INDEX "Guest_hotelId_document_idx" ON "Guest"("hotelId", "document");
CREATE INDEX "Guest_hotelId_email_idx" ON "Guest"("hotelId", "email");

ALTER TABLE "Guest" ADD CONSTRAINT "Guest_hotelId_fkey"
FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
