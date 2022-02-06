import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachinesController } from './machines/machines.controller';
import { MachinesService } from './machines/machines.service';

@Module({
  imports: [],
  controllers: [AppController, MachinesController],
  providers: [AppService, MachinesService],
})
export class AppModule {}
