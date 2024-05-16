import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  calcularPrecioTotal(datosProducto: any): any {
    const { precio, iva } = datosProducto;
    datosProducto.total = precio + precio * (iva / 100);
    return datosProducto;
  }
}
