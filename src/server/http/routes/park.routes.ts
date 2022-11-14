import { Router } from 'express';
import { CreateParkController } from '../../../modules/park/useCases/createPark/CreateParkController';
import { ListByUserController } from '../../../modules/park/useCases/listByUser/ListByUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const parkingRoutes = Router();

const createParkController = new CreateParkController();
const listByUserController = new ListByUserController();

parkingRoutes.post('/', ensureAuthenticated, createParkController.handle);
parkingRoutes.get(
    '/park-list',
    ensureAuthenticated,
    listByUserController.handle,
);

export { parkingRoutes };
