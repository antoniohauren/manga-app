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
        volume_number: createVolumeDto.volume_number,
        bought: createVolumeDto.bought,
        read: createVolumeDto.read,
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
        bought: updateVolumeDto.bought,
        read: updateVolumeDto.read,
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
