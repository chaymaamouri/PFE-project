import { PartialType } from '@nestjs/mapped-types';
import { CreateSociétéDto } from './create-société.dto';

export class UpdateSociétéDto extends PartialType(CreateSociétéDto) {}
