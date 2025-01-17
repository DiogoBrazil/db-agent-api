// src/infra/http/controllers/CustomerController.ts
import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { CreateCustomer } from '../../../domain/usecases/customers/CreateCustomer';
import { GetCustomerById } from '../../../domain/usecases/customers/GetCustomerById';
import { UpdateCustomer } from '../../../domain/usecases/customers/UpdateCustomer';
import { DeleteCustomer } from '../../../domain/usecases/customers/DeleteCustomer';
import { TYPES } from '../../types';
import { handleError } from '../../../utils/errorHandler';


@injectable()
export class CustomerController {
  constructor(
    @inject(TYPES.CreateCustomer) private createCustomer: CreateCustomer,
    @inject(TYPES.GetCustomerById) private getCustomerById: GetCustomerById,
    @inject(TYPES.UpdateCustomer) private updateCustomer: UpdateCustomer,
    @inject(TYPES.DeleteCustomer) private deleteCustomer: DeleteCustomer
  ) {}

  async create(req: Request, res: Response) {
    try {
      const customer = await this.createCustomer.execute(req.body);
      res.status(201).json(customer);
    } catch (error) {
      handleError(res, error);
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const customer = await this.getCustomerById.execute(Number(req.params.id));
      if (customer) {
        res.status(200).json(customer);
      } else {
        throw new Error('Customer not found');
      }
    } catch (error) {
      handleError(res, error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const customer = await this.updateCustomer.execute(Number(req.params.id), req.body);
      res.status(200).json(customer);
    } catch (error) {
      handleError(res, error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await this.deleteCustomer.execute(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleError(res, error);
    }
  }
}