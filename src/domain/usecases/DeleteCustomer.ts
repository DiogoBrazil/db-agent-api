import { inject, injectable } from 'inversify';
import { CustomerRepository } from '../repositories/CustomerRepository';
import { TYPES } from '../../infra/types';

@injectable()
export class DeleteCustomer {
  constructor(
    @inject(TYPES.CustomerRepository) private customerRepository: CustomerRepository
  ) {}

  async execute(id: number) {
    return this.customerRepository.delete(id);
  }
}