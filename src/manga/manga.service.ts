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

  async findAll() {
    const found = await this.prisma.manga.findMany({
      orderBy: {
        name: 'asc',
      },
      select: {
        id: true,
        name: true,
        completed: true,
        author: true,
        _count: true,
        volumes: {
          select: {
            bought: true,
            read: true,
          },
        },
      },
    });

    return found.map(({ id, name, completed, author, volumes }) => {
      return {
        id,
        name,
        author,
        completed,
        volumes: volumes.length,
        bought: volumes.filter(({ bought }) => bought).length,
        read: volumes.filter(({ read }) => read).length,
      };
    });
  }

  async findOne(id: number) {
    const found = await this.prisma.manga.findUnique({
      where: { id },
      include: {
        volumes: {
          orderBy: {
            volume_number: 'asc',
          },
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
