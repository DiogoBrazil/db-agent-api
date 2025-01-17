import { inject, injectable } from 'inversify';
import { ProductRepository } from '../../repositories/ProductRepository';
import { TYPES } from '../../../infra/types';

@injectable()
export class GetProductById {
  constructor(
    @inject(TYPES.ProductRepository) private productRepository: ProductRepository
  ) {}

  async execute(id: number) {
    return this.productRepository.findById(id);
  }
}