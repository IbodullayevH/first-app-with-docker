import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Barcha mahsulotlarni olish
  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  // Bitta mahsulotni olish
  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id } });
  }

  // Mahsulot yaratish
  create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  // Mahsulotni yangilash
  async update(id: number, updatedProduct: Product): Promise<Product> {
    await this.productRepository.update(id, updatedProduct);
    return this.productRepository.findOne({ where: { id } });
  }

  // Mahsulotni o'chirish
  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
