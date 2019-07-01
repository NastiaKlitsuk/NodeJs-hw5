import { store } from '../store';
import { isItemExists, findItemIndex } from './general';

export function findCategoryById(id: string) {
  return isItemExists(id, store.categories);
}

export function findCategoryIndex(id: string) {
  return findItemIndex(id, store.categories);
}
