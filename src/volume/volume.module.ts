import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VolumeController } from './volume.controller';
import { VolumeService } from './volume.service';

@Module({
  controllers: [VolumeController],
  providers: [VolumeService, PrismaService],
})
export class VolumeModule {}
