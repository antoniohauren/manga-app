import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MangaController } from './manga.controller';
import { MangaService } from './manga.service';

@Module({
  controllers: [MangaController],
  providers: [MangaService, PrismaService],
})
export class MangaModule {}
