import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangaModule } from './manga/manga.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [MangaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
