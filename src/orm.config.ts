import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config :TypeOrmModuleOptions= 
{
  
      type: 'postgres',
      host: 'localhost'||'127.0.0.1',
      port:5432,
      username: 'postgres',
      password:'chayma',
      database: 'PFE-DATABASE',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
  
  
  };
  
