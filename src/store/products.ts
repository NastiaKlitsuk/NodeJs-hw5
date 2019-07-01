import { getStaticFile } from '../utils/http';

export async function getProducts() {
  return getStaticFile('products.json');
}
