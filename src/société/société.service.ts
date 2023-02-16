import { Injectable } from '@nestjs/common';
import { CreateSociétéDto } from './dto/create-société.dto';
import { UpdateSociétéDto } from './dto/update-société.dto';

@Injectable()
export class SociétéService {
  create(createSociétéDto: CreateSociétéDto) {
    return 'This action adds a new société';
  }

  findAll() {
    return `This action returns all société`;
  }

  findOne(id: number) {
    return `This action returns a #${id} société`;
  }

  update(id: number, updateSociétéDto: UpdateSociétéDto) {
    return `This action updates a #${id} société`;
  }

  remove(id: number) {
    return `This action removes a #${id} société`;
  }
}
