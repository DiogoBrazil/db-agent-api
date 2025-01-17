import { inject, injectable } from 'inversify';
import { ProductRepository } from '../../repositories/ProductRepository';
import { Product } from '../../entities/Products';
import { TYPES } from '../../../infra/types';

@injectable()
export class CreateProduct {
  constructor(
    @inject(TYPES.ProductRepository) private productRepository: ProductRepository
  ) {}

  async execute(product: Product): Promise<Product> {
    return this.productRepository.create(product);
  }
}