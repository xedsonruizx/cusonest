import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
constructor(private productsService: ProductsService){}

  @Get('listar') // ruta
  getProducts(): string {
    return 'Listado Products';
  }

  @Post('create')
  createProduct(@Body() datosProduct: any) {
    const result = this.productsService.calcularPrecioTotal(datosProduct);
    return result;
  }
}
