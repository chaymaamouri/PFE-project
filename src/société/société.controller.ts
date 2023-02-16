import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SociétéService } from './société.service';
import { CreateSociétéDto } from './dto/create-société.dto';
import { UpdateSociétéDto } from './dto/update-société.dto';

@Controller('société')
export class SociétéController {
  constructor(private readonly sociétéService: SociétéService) {}

  @Post()
  create(@Body() createSociétéDto: CreateSociétéDto) {
    return this.sociétéService.create(createSociétéDto);
  }

  @Get()
  findAll() {
    return this.sociétéService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sociétéService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSociétéDto: UpdateSociétéDto) {
    return this.sociétéService.update(+id, updateSociétéDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sociétéService.remove(+id);
  }
}
