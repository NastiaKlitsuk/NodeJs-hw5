import express from 'express';
import { renderCategoriesView } from '../controllers/clientapp';

const router = express.Router();

router.get('/categories', renderCategoriesView);

export { router };
