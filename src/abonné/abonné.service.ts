import { Injectable } from '@nestjs/common';
import { CreateAbonnéDto } from './dto/create-abonné.dto';
import { UpdateAbonnéDto } from './dto/update-abonné.dto';

@Injectable()
export class AbonnéService {
  create(createAbonnéDto: CreateAbonnéDto) {
    return 'This action adds a new abonné';
  }

  findAll() {
    return `This action returns all abonné`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abonné`;
  }

  update(id: number, updateAbonnéDto: UpdateAbonnéDto) {
    return `This action updates a #${id} abonné`;
  }

  remove(id: number) {
    return `This action removes a #${id} abonné`;
  }
}
