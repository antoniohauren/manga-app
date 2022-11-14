import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVolumeDto } from './dto/create-volume.dto';
import { UpdateVolumeDto } from './dto/update-volume.dto';

@Injectable()
export class VolumeService {
  constructor(private prisma: PrismaService) {}

  create(createVolumeDto: CreateVolumeDto) {
    return this.prisma.volume.create({
      data: {
        number_pages: createVolumeDto.number_pages,
        volume_number: createVolumeDto.volume_name,
        manga: {
          connect: {
            id: createVolumeDto.mangaId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.volume.findMany();
  }

  async findOne(id: number) {
    const found = await this.prisma.volume.findUnique({
      where: { id },
    });

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async update(id: number, updateVolumeDto: UpdateVolumeDto) {
    await this.findOne(id);

    return this.prisma.volume.update({
      where: { id },
      data: {
        number_pages: updateVolumeDto.number_pages,
        volume_number: updateVolumeDto.volume_name,
        manga: {
          connect: {
            id: updateVolumeDto.mangaId,
          },
        },
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.volume.delete({
      where: { id },
    });
  }
}
