-- DropForeignKey
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_mangaId_fkey";

-- AddForeignKey
ALTER TABLE "Volume" ADD CONSTRAINT "Volume_mangaId_fkey" FOREIGN KEY ("mangaId") REFERENCES "Manga"("id") ON DELETE CASCADE ON UPDATE CASCADE;
