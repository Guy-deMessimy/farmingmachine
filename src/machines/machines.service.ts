import { Injectable, NotFoundException } from '@nestjs/common';
import { Machine } from './entities/machine.entity';

@Injectable()
export class MachinesService {
  // use for mock db : machines are array of type Machine entity
  private machines: Machine[] = [
    {
      id: 1,
      marque: 'Class',
      model: 'Trion',
      serie: '700',
      gamme: '750 TERRA TRAC',
      puissance_kW: 320,
      puissance_ch: 435,
      vitesse_maxi_kmh: 30,
      reservoir_energie_l: 1000,
      reservoir_tremie_l: 12000,
      rotors_nbre: 2,
      largeur_bateur_mm: 1420,
    },
  ];
  findAll() {
    return this.machines;
  }

  findSpecific() {
    return this.machines;
  }

  findOne(id: string) {
    // use built in method for catches exceptions
    // throw 'A random error';
    const coffee = this.machines.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Machine #${id} not found`);
    }
    return coffee;
  }

  create(createMachineDto: any) {
    this.machines.push(createMachineDto);
    return createMachineDto;
  }

  createOne(createMachineDto: any) {
    this.machines.push(createMachineDto);
  }

  update(id: string, updateMachineDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      this.machines.push(updateMachineDto);
    }
  }

  remove(id: string) {
    const coffeeIndex = this.machines.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.machines.splice(coffeeIndex, 1);
    }
  }
}
