import * as products from './products';
import * as categories from './categories';
import { credentials } from '../store/credentials';
import { Product, Category } from '../models/index';
import { UserCredential } from '../models/credentials';

interface Store {
  products: Product[];
  categories: Category[];
  deletedProductsIds: string[];
  deletedCategoriesIds: string[];
  credentials: UserCredential[];
}

export let store: Store = {
  products: [],
  categories: [],
  credentials,
  deletedProductsIds: [],
  deletedCategoriesIds: [],
};

export function initStore() {
  categories
    .getCategories()
    .then(categoriesData => (store.categories = categoriesData));

  products.getProducts().then(productsData => (store.products = productsData));
}
