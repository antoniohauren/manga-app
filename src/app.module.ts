import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangaModule } from './manga/manga.module';
import { PrismaService } from './prisma/prisma.service';
import { VolumeModule } from './volume/volume.module';

@Module({
  imports: [MangaModule, VolumeModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
