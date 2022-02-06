// Implement validation rules in our CreateCoffeeDto
import { IsString, IsNumber } from 'class-validator';

export class CreateMachineDto {
  // no need to specify id will be auto increment by sgbd
  // add readonly for preserve immutability
  @IsString()
  readonly marque: string;

  @IsString()
  readonly model: string;

  @IsString()
  readonly serie: string;

  @IsString()
  readonly gamme: string;

  @IsNumber()
  readonly puissance_kW: number;

  @IsNumber()
  readonly puissance_ch: number;

  @IsNumber()
  readonly vitesse_maxi_kmh: number;

  @IsNumber()
  readonly reservoir_energie_l: number;

  @IsNumber()
  readonly reservoir_tremie_l: number;

  @IsNumber()
  readonly rotors_nbre: number;

  @IsNumber()
  readonly largeur_bateur_mm: number;
}
