import { inject, injectable } from 'inversify';
import { ProductRepository } from '../../repositories/ProductRepository';
import { TYPES } from '../../../infra/types';
import { Product } from '../../entities/Products';

@injectable()
export class UpdateProduct {
  constructor(
    @inject(TYPES.ProductRepository) private productRepository: ProductRepository
  ) {}

  async execute(id: number, Product: Partial<Product>) {
    return this.productRepository.update(id, Product);
  }
}