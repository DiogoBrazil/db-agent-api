import { inject, injectable } from 'inversify';
import { ProductRepository } from '../../repositories/ProductRepository';
import { TYPES } from '../../../infra/types';

@injectable()
export class DeleteProduct {
  constructor(
    @inject(TYPES.ProductRepository) private produtcRepository: ProductRepository
  ) {}

  async execute(id: number) {
    return this.produtcRepository.delete(id);
  }
}