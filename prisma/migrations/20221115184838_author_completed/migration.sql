/*
  Warnings:

  - Added the required column `author` to the `Manga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `completed` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manga" ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "completed" BOOLEAN NOT NULL;
