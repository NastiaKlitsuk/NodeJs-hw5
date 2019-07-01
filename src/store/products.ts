import { getStaticFile } from '../utils/http-client';

export async function getProducts() {
  return getStaticFile('products.json');
}
