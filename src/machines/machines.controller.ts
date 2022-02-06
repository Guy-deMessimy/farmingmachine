import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('machines')
export class MachinesController {
  @Get()
  findAll() {
    return 'This action returns all machines';
  }

  @Get('moissoneuses-batteuses')
  findSpecific() {
    return 'This action returns all moissonneuses-batteuses';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} machine`;
  }

  @Post()
  create(@Body() body) {
    return body;
    // return `This action creates a machine`;
  }

  @Post('moissoneuses-batteuses')
  createOne(@Body('marque') body) {
    return body;
    // return `This action creates a machine and return only brand`;
    // be careful because others ignore properties won't be validate;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} machine`;
    // partial update
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} machine`;
  }
}
