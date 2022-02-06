import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachinesController } from './machines/machines.controller';

@Module({
  imports: [],
  controllers: [AppController, MachinesController],
  providers: [AppService],
})
export class AppModule {}
