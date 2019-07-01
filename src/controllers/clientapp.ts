import { store } from '../store';
import { Response, Request, NextFunction } from 'express';

export function renderCategoriesView(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const categories = store.categories;
  response.render('categories', {
    pageTitle: 'Categories Page',
    categories,
  });
}
