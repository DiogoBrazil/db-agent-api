import { injectable } from 'inversify';
import { CustomerRepository } from '../../../domain/repositories/CustomerRepository';
import { Customer } from '../../../domain/entities/Customer';
import { prisma } from '../../config/prisma';

@injectable()
export class CustomerRepositoryImpl implements CustomerRepository {
  async create(customer: Customer): Promise<Customer> {
    return prisma.customers.create({ data: customer });
  }

  async findById(id: number): Promise<Customer | null> {
    return prisma.customers.findUnique({ where: { id } });
  }

  async findAll(): Promise<Customer[]> {
    return prisma.customers.findMany();
  }

  async update(id: number, customer: Partial<Customer>): Promise<Customer> {
    return prisma.customers.update({ where: { id }, data: customer });
  }

  async delete(id: number): Promise<void> {
    await prisma.customers.delete({ where: { id } });
  }
}