import 'reflect-metadata';
import express from 'express';
import { container } from './infra/container';
import { CustomerController } from './infra/http/controllers/CustomerController';
import { ProductController } from './infra/http/controllers/ProductController';
import { TYPES } from './infra/types';
import { prisma } from './infra/config/prisma';

const app = express();
app.use(express.json());

// Resolvendo o controller do contêiner
const customerController = container.get<CustomerController>(TYPES.CustomerController);
const productController = container.get<ProductController>(TYPES.ProductController);


// Rotas para Customer
app.post('/customers', (req, res) => customerController.create(req, res));
app.get('/customers/:id', (req, res) => customerController.findById(req, res));
app.put('/customers/:id', (req, res) => customerController.update(req, res));
app.delete('/customers/:id', (req, res) => customerController.delete(req, res));

// Rotas para Product
app.post('/products', (req, res) => productController.create(req, res));
app.get('/products/:id', (req, res) => productController.findById(req, res));
app.put('/products/:id', (req, res) => productController.update(req, res));
app.delete('/products/:id', (req, res) => productController.delete(req, res));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});