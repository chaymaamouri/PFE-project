import { Module } from '@nestjs/common';
import { AbonnéService } from './abonné.service';
import { AbonnéController } from './abonné.controller';

@Module({
  controllers: [AbonnéController],
  providers: [AbonnéService]
})
export class AbonnéModule {}
