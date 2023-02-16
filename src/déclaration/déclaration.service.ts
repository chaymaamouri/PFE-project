import { Injectable } from '@nestjs/common';
import { CreateDéclarationDto } from './dto/create-déclaration.dto';
import { UpdateDéclarationDto } from './dto/update-déclaration.dto';

@Injectable()
export class DéclarationService {
  create(createDéclarationDto: CreateDéclarationDto) {
    return 'This action adds a new déclaration';
  }

  findAll() {
    return `This action returns all déclaration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} déclaration`;
  }

  update(id: number, updateDéclarationDto: UpdateDéclarationDto) {
    return `This action updates a #${id} déclaration`;
  }

  remove(id: number) {
    return `This action removes a #${id} déclaration`;
  }
}
