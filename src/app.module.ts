import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { FactureModule } from './facture/facture.module';
import { SociétéModule } from './société/société.module';
import { DéclarationModule } from './déclaration/déclaration.module';
import { AbonnéModule } from './abonné/abonné.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './orm.config';




@Module({
  imports:[TypeOrmModule.forRoot(config),FactureModule,AbonnéModule],
  controllers: [AppController],
  providers: [AppService],
  
              
         
    

})
export class AppModule {}

