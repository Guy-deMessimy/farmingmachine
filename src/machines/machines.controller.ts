import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { MachinesService } from './machines.service';

@Controller('machines')
export class MachinesController {
  // private : both declare and initialize MachinesService
  constructor(private readonly machineService: MachinesService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.machineService.findAll();
  }

  @Get('moissoneuses-batteuses')
  findSpecific() {
    return this.machineService.findSpecific();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.machineService.create(body);
  }

  @Post('moissoneuses-batteuses')
  createOne(@Body('marque') body) {
    return this.machineService.createOne(body);
    // return `This action creates a machine and return only brand`;
    // be careful because others ignore properties won't be validate;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.machineService.update(id, body);
    // partial update
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machineService.remove(id);
  }
}
