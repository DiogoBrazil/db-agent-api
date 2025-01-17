import { Product } from '../entities/Products';

export interface ProductRepository {
  create(customer: Product): Promise<Product>;
  findById(id: number): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  update(id: number, customer: Partial<Product>): Promise<Product>;
  delete(id: number): Promise<void>;
}