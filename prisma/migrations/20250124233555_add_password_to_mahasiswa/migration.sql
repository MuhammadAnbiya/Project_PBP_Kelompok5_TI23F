/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Dosen` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Mahasiswa` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Mahasiswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mahasiswa` ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Dosen_email_key` ON `Dosen`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Mahasiswa_email_key` ON `Mahasiswa`(`email`);
