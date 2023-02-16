import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { FactureModule } from './facture/facture.module';
import { SociétéModule } from './société/société.module';
import { DéclarationModule } from './déclaration/déclaration.module';
import { AbonnéModule } from './abonné/abonné.module';
import { ConfigModule, ConfigService } from '@nestjs/config';



@Module({
  imports: [ 
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),FactureModule, SociétéModule, DéclarationModule, AbonnéModule],

  controllers: [AppController],
  providers: [AppService],
  }

 
  
)
export class AppModule {}
