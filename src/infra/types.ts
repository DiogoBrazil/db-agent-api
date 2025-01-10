const TYPES = {
    CustomerRepository: Symbol.for('CustomerRepository'),
    CreateCustomer: Symbol.for('CreateCustomer'),
    GetCustomerById: Symbol.for('GetCustomerById'),
    UpdateCustomer: Symbol.for('UpdateCustomer'),
    DeleteCustomer: Symbol.for('DeleteCustomer'),
    CustomerController: Symbol.for('CustomerController'),
  };
  
  export { TYPES };