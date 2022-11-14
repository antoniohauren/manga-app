import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMangaDto } from './dto/create-manga.dto';
import { UpdateMangaDto } from './dto/update-manga.dto';

@Injectable()
export class MangaService {
  constructor(private prisma: PrismaService) {}

  create(createMangaDto: CreateMangaDto) {
    return this.prisma.manga.create({
      data: createMangaDto,
    });
  }

  findAll() {
    return this.prisma.manga.findMany({
      select: {
        id: true,
        name: true,
        _count: true,
      },
    });
  }

  async findOne(id: number) {
    const found = await this.prisma.manga.findUnique({
      where: { id },
      include: {
        volumes: {
          select: {
            id: true,
            number_pages: true,
            volume_number: true,
            bought: true,
            read: true,
          },
        },
      },
    });

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  async update(id: number, updateMangaDto: UpdateMangaDto) {
    await this.findOne(id);

    return this.prisma.manga.update({
      where: { id },
      data: updateMangaDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.manga.delete({
      where: { id },
    });
  }
}
