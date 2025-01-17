// src/infra/http/controllers/CustomerController.ts
import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { CreateProduct } from '../../../domain/usecases/products/CreateProduct';
import { GetProductById } from '../../../domain/usecases/products/GetProductById';
import { UpdateProduct } from '../../../domain/usecases/products/UpdateProduct';
import { DeleteProduct } from '../../../domain/usecases/products/DeleteProduct';
import { TYPES } from '../../types';
import { handleError } from '../../../utils/errorHandler';


@injectable()
export class ProductController {
  constructor(
    @inject(TYPES.CreateProduct) private createProduct: CreateProduct,
    @inject(TYPES.GetProductById) private getProductById: GetProductById,
    @inject(TYPES.UpdateProduct) private updateProduct: UpdateProduct,
    @inject(TYPES.DeleteProduct) private deleteProduct: DeleteProduct
  ) {}

  async create(req: Request, res: Response) {
    try {
      const product = await this.createProduct.execute(req.body);
      res.status(201).json(product);
    } catch (error) {
      handleError(res, error);
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const product = await this.getProductById.execute(Number(req.params.id));
      if (product) {
        res.status(200).json(product);
      } else {
        throw new Error('Product not found');
      }
    } catch (error) {
      handleError(res, error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const product = await this.updateProduct.execute(Number(req.params.id), req.body);
      res.status(200).json(product);
    } catch (error) {
      handleError(res, error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await this.deleteProduct.execute(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleError(res, error);
    }
  }
}