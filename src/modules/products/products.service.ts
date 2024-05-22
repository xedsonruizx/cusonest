import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { products } from 'src/utils/products';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const productID =
      products.length === 0 ? 1 : products[products.length - 1].id + 1;
    products.push({ id: productID, ...createProductDto });
    return products[products.length - 1];
  }

  async findAll() {
    const listado = await this.productRepository;
    return listado;
  }

  findOne(id: number) {
    const productID = products.findIndex((p) => p.id === id);

    if (productID !== -1) return products[productID];
    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    // return `El producto con #${id} no existe`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const productID = products.findIndex((p) => p.id === id);
    if (productID !== -1) {
      products[productID] = { ...products[productID], ...updateProductDto };
      return products[productID];
    }
    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
  }

  remove(id: number) {
    const productID = products.findIndex((p) => p.id === id);
    if (productID !== -1) {
      const eliminado = products.splice(productID, 1);
      return eliminado;
    }
    return 'Producto no existe';
  }
}
