import { Container } from 'inversify';

import { CustomerRepository } from '../domain/repositories/CustomerRepository';
import { CustomerRepositoryImpl } from '../infra/http/repositories/CustomerReposiotyImpl';
import { CreateCustomer } from '../domain/usecases/customers/CreateCustomer';
import { GetCustomerById } from '../domain/usecases/customers/GetCustomerById';
import { UpdateCustomer } from '../domain/usecases/customers/UpdateCustomer';
import { DeleteCustomer } from '../domain/usecases/customers/DeleteCustomer';
import { CustomerController } from '../infra/http/controllers/CustomerController';

import { ProductRepository } from '../domain/repositories/ProductRepository';
import { ProductRepositoryImpl } from '../infra/http/repositories/ProductReposiotyImpl';
import { CreateProduct } from '../domain/usecases/products/CreateProduct';
import { GetProductById } from '../domain/usecases/products/GetProductById';
import { UpdateProduct } from '../domain/usecases/products/UpdateProduct';
import { DeleteProduct } from '../domain/usecases/products/DeleteProduct';
import { ProductController } from '../infra/http/controllers/ProductController';


import { TYPES } from './types';

const container = new Container();

container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerRepositoryImpl);
container.bind<CreateCustomer>(TYPES.CreateCustomer).to(CreateCustomer);
container.bind<GetCustomerById>(TYPES.GetCustomerById).to(GetCustomerById);
container.bind<UpdateCustomer>(TYPES.UpdateCustomer).to(UpdateCustomer);
container.bind<DeleteCustomer>(TYPES.DeleteCustomer).to(DeleteCustomer);
container.bind<CustomerController>(TYPES.CustomerController).to(CustomerController);

container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl);
container.bind<CreateProduct>(TYPES.CreateProduct).to(CreateProduct);
container.bind<GetProductById>(TYPES.GetProductById).to(GetProductById);
container.bind<UpdateProduct>(TYPES.UpdateProduct).to(UpdateProduct);
container.bind<DeleteProduct>(TYPES.DeleteProduct).to(DeleteProduct);
container.bind<ProductController>(TYPES.ProductController).to(ProductController);

export { container };