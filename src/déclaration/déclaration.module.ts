import { Module } from '@nestjs/common';
import { DéclarationService } from './déclaration.service';
import { DéclarationController } from './déclaration.controller';

@Module({
  controllers: [DéclarationController],
  providers: [DéclarationService]
})
export class DéclarationModule {}
