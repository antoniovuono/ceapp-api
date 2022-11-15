import { Router } from 'express';
import { CreateParkController } from '../../../modules/park/useCases/createPark/CreateParkController';
import { ExitCarController } from '../../../modules/park/useCases/exitCar/ExitCarController';
import { ListByUserController } from '../../../modules/park/useCases/listByUser/ListByUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const parkingRoutes = Router();

const createParkController = new CreateParkController();
const listByUserController = new ListByUserController();
const exitCarController = new ExitCarController();

parkingRoutes.post('/', ensureAuthenticated, createParkController.handle);
parkingRoutes.get(
    '/park-list',
    ensureAuthenticated,
    listByUserController.handle,
);

parkingRoutes.patch(
    '/exit-car/:id',
    ensureAuthenticated,
    exitCarController.handle,
);

export { parkingRoutes };
