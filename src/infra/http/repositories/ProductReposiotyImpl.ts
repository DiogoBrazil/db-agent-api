import { injectable } from 'inversify';
import { ProductRepository } from '../../../domain/repositories/ProductRepository';
import { Product } from '../../../domain/entities/Products';
import { prisma } from '../../config/prisma';

@injectable()
export class ProductRepositoryImpl implements ProductRepository {
  async create(product: Product): Promise<Product> {
    return prisma.products.create({ data: product });
  }

  async findById(id: number): Promise<Product | null> {
    return prisma.products.findUnique({ where: { id } });
  }

  async findAll(): Promise<Product[]> {
    return prisma.products.findMany();
  }

  async update(id: number, product: Partial<Product>): Promise<Product> {
    return prisma.products.update({ where: { id }, data: product });
  }

  async delete(id: number): Promise<void> {
    await prisma.products.delete({ where: { id } });
  }
}