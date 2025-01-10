import { Container } from 'inversify';
import { CustomerRepository } from '../domain/repositories/CustomerRepository';
import { CustomerRepositoryImpl } from '../infra/http/repositories/CustomerReposiotyImpl';
import { CreateCustomer } from '../domain/usecases/CreateCustomer';
import { GetCustomerById } from '../domain/usecases/GetCustomerById';
import { UpdateCustomer } from '../domain/usecases/UpdateCustomer';
import { DeleteCustomer } from '../domain/usecases/DeleteCustomer';
import { CustomerController } from '../infra/http/controllers/CustomerController';
import { TYPES } from './types';

const container = new Container();

container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerRepositoryImpl);
container.bind<CreateCustomer>(TYPES.CreateCustomer).to(CreateCustomer);
container.bind<GetCustomerById>(TYPES.GetCustomerById).to(GetCustomerById);
container.bind<UpdateCustomer>(TYPES.UpdateCustomer).to(UpdateCustomer);
container.bind<DeleteCustomer>(TYPES.DeleteCustomer).to(DeleteCustomer);
container.bind<CustomerController>(TYPES.CustomerController).to(CustomerController);

export { container };