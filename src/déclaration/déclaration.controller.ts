import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DéclarationService } from './déclaration.service';
import { CreateDéclarationDto } from './dto/create-déclaration.dto';
import { UpdateDéclarationDto } from './dto/update-déclaration.dto';

@Controller('déclaration')
export class DéclarationController {
  constructor(private readonly déclarationService: DéclarationService) {}

  @Post()
  create(@Body() createDéclarationDto: CreateDéclarationDto) {
    return this.déclarationService.create(createDéclarationDto);
  }

  @Get()
  findAll() {
    return this.déclarationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.déclarationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDéclarationDto: UpdateDéclarationDto) {
    return this.déclarationService.update(+id, updateDéclarationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.déclarationService.remove(+id);
  }
}
