const TYPES = {
    CustomerRepository: Symbol.for('CustomerRepository'),
    CreateCustomer: Symbol.for('CreateCustomer'),
    GetCustomerById: Symbol.for('GetCustomerById'),
    UpdateCustomer: Symbol.for('UpdateCustomer'),
    DeleteCustomer: Symbol.for('DeleteCustomer'),
    CustomerController: Symbol.for('CustomerController'),
    ProductRepository: Symbol.for('ProductRepository'),
    CreateProduct: Symbol.for('CreateProduct'),
    GetProductById: Symbol.for('GetProductById'),
    UpdateProduct: Symbol.for('UpdateProduct'),
    DeleteProduct: Symbol.for('DeleteProduct'),
    ProductController: Symbol.for('ProductController'),
  };
  
  export { TYPES };