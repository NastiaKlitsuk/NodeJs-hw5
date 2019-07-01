import { getStaticFile } from '../utils/http-client';

export async function getCategories() {
  return getStaticFile('categories.json');
}
