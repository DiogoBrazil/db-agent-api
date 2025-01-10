import { inject, injectable } from 'inversify';
import { CustomerRepository } from '../repositories/CustomerRepository';
import { TYPES } from '../../infra/types';
import { Customer } from '../entities/Customer';

@injectable()
export class UpdateCustomer {
  constructor(
    @inject(TYPES.CustomerRepository) private customerRepository: CustomerRepository
  ) {}

  async execute(id: number, customer: Partial<Customer>) {
    return this.customerRepository.update(id, customer);
  }
}