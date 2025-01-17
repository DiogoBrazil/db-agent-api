import { inject, injectable } from 'inversify';
import { CustomerRepository } from '../../repositories/CustomerRepository';
import { TYPES } from '../../../infra/types';

@injectable()
export class GetCustomerById {
  constructor(
    @inject(TYPES.CustomerRepository) private customerRepository: CustomerRepository
  ) {}

  async execute(id: number) {
    return this.customerRepository.findById(id);
  }
}