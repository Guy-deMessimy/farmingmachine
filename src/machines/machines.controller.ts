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
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
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
    // to illustrate nested path
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineService.findOne(id);
  }

  @Post()
  create(@Body() createMachineDto: CreateMachineDto) {
    return this.machineService.create(createMachineDto);
  }

  @Post('moissoneuses-batteuses')
  createOne(@Body('marque') createMachineDto: CreateMachineDto) {
    return this.machineService.createOne(createMachineDto);
    // return this action creates a machine and return only brand`;
    // be careful because others ignore properties won't be validate;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMachineDto: UpdateMachineDto) {
    return this.machineService.update(id, updateMachineDto);
    // partial update
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machineService.remove(id);
  }
}
