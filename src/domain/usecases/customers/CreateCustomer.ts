import { inject, injectable } from 'inversify';
import { CustomerRepository } from '../../repositories/CustomerRepository';
import { Customer } from '../../entities/Customer';
import { TYPES } from '../../../infra/types';

@injectable()
export class CreateCustomer {
  constructor(
    @inject(TYPES.CustomerRepository) private customerRepository: CustomerRepository
  ) {}

  async execute(customer: Customer): Promise<Customer> {
    return this.customerRepository.create(customer);
  }
}