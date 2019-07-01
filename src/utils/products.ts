import { store } from '../store';
import { isItemExists, findItemIndex } from './general';

export function findProductById(id: string) {
  return isItemExists(id, store.products);
}

export function findProductIndex(id: string) {
  return findItemIndex(id, store.products);
}
