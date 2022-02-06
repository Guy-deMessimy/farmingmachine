import { Controller, Get } from '@nestjs/common';

@Controller('machines')
export class MachinesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }
}
