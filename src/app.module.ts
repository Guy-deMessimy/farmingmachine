import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachinesModule } from './machines/machines.module';

@Module({
  imports: [
    MachinesModule,
    TypeOrmModule.forRoot({
      logging: true,
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.MYSQL_PORT || 3306,
      username: process.env.DATABASE_USERNAME || 'root',
      password: process.env.DATABASE_PASSWORD || 'root',
      database: process.env.DATABASE_NAME || 'farmingDb',
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
