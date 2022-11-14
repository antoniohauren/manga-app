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
    return this.prisma.manga.findMany();
  }

  async findOne(id: number) {
    const found = await this.prisma.manga.findUnique({
      where: { id },
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
