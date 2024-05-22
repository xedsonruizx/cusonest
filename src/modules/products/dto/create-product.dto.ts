import { IsString, IsNumber, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  precio: number;

  @IsString()
  @IsNotEmpty()
  presentacion: string;
}
