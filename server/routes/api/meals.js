import { Router } from 'express';

import mealsController from '../../controller/mealsController';

const mealsRouter = Router();

mealsRouter.post('/least_ingredients', mealsController.leastIngredients);

export default mealsRouter;