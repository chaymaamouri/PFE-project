import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbonnéService } from './abonné.service';
import { CreateAbonnéDto } from './dto/create-abonné.dto';
import { UpdateAbonnéDto } from './dto/update-abonné.dto';

@Controller('abonné')
export class AbonnéController {
  constructor(private readonly abonnéService: AbonnéService) {}

  @Post()
  create(@Body() createAbonnéDto: CreateAbonnéDto) {
    return this.abonnéService.create(createAbonnéDto);
  }

  @Get()
  findAll() {
    return this.abonnéService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abonnéService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbonnéDto: UpdateAbonnéDto) {
    return this.abonnéService.update(+id, updateAbonnéDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abonnéService.remove(+id);
  }
}
