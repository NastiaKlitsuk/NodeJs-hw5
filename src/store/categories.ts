import { getStaticFile } from '../utils/http';

export async function getCategories() {
  return getStaticFile('categories.json');
}
