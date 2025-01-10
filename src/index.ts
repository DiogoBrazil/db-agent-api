import 'reflect-metadata';
import express from 'express';
import { container } from './infra/container';
import { CustomerController } from './infra/http/controllers/CustomerController';
import { TYPES } from './infra/types';
import { prisma } from './infra/config/prisma';

const app = express();
app.use(express.json());

// Resolvendo o controller do contêiner
const customerController = container.get<CustomerController>(TYPES.CustomerController);

// Rotas para Customer
app.post('/customers', (req, res) => customerController.create(req, res));
app.get('/customers/:id', (req, res) => customerController.findById(req, res));
app.put('/customers/:id', (req, res) => customerController.update(req, res));
app.delete('/customers/:id', (req, res) => customerController.delete(req, res));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});