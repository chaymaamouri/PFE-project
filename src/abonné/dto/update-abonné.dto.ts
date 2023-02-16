import { PartialType } from '@nestjs/mapped-types';
import { CreateAbonnéDto } from './create-abonné.dto';

export class UpdateAbonnéDto extends PartialType(CreateAbonnéDto) {}
