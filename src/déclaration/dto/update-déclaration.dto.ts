import { PartialType } from '@nestjs/mapped-types';
import { CreateDéclarationDto } from './create-déclaration.dto';

export class UpdateDéclarationDto extends PartialType(CreateDéclarationDto) {}
