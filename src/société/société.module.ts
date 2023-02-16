import { Module } from '@nestjs/common';
import { SociétéService } from './société.service';
import { SociétéController } from './société.controller';

@Module({
  controllers: [SociétéController],
  providers: [SociétéService]
})
export class SociétéModule {}
