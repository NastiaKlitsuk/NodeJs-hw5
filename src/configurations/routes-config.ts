import { Router } from 'express';
import { router as products } from '../routes/products';
import { router as categories } from '../routes/categories';
import { router as login } from '../routes/login';
import { router as clientapp } from '../routes/clientapp';

interface RouteConfig {
  prefix: string;
  router: Router;
}

export const clients = [
  {
    prefix: '/',
    router: clientapp,
  },
];

const config: { [routeName: string]: RouteConfig } = {
  products: {
    prefix: '/api/products',
    router: products,
  },
  categories: {
    prefix: '/api/categories',
    router: categories,
  },
  login: {
    prefix: '/api/login',
    router: login,
  },
};

export { config };
