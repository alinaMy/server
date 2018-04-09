import { Router } from 'express';

import {
  productCreate,
  productDeleteById,
  productLoadAll,
  productUpdateById,
  getSum,
  postSum,
} from './productControllers';

const router = Router();

router.get('/', productLoadAll);
router.post('/', productCreate);
router.patch('/:productId', productUpdateById);
router.delete('/:productId', productDeleteById);
router.get('/sum', getSum);
router.post('/sum', postSum);

export default router;
