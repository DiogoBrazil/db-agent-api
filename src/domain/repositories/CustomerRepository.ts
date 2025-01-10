import { Customer } from '../entities/Customer';

export interface CustomerRepository {
  create(customer: Customer): Promise<Customer>;
  findById(id: number): Promise<Customer | null>;
  findAll(): Promise<Customer[]>;
  update(id: number, customer: Partial<Customer>): Promise<Customer>;
  delete(id: number): Promise<void>;
}