import { Router } from 'express';

import stockController from '../../controller/stockController';

const stockRouter = Router();

stockRouter.get('/prices', stockController.getPrices);

export default stockRouter;