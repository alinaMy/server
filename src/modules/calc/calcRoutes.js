import { Router } from 'express';

import {
  postSum,
  postSub,
  postMult,
  postDiv
} from './calcControllers';

const router = Router();

router.post('/sum', postSum);
router.post('/sub', postSub);
router.post('/mult', postMult);
router.post('/div', postDiv);


export default router;
