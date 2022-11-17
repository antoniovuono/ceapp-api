import { Router } from 'express';
import { CreateParkController } from '../../../modules/park/useCases/createPark/CreateParkController';
import { DeleteParkController } from '../../../modules/park/useCases/deletePark/DeleteParkController';
import { ExitCarController } from '../../../modules/park/useCases/exitCar/ExitCarController';
import { ListByCarPlateController } from '../../../modules/park/useCases/listByCarPlate/ListByCarPlateController';
import { ListByUserController } from '../../../modules/park/useCases/listByUser/ListByUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const parkingRoutes = Router();

const createParkController = new CreateParkController();
const listByUserController = new ListByUserController();
const exitCarController = new ExitCarController();
const deleteParkController = new DeleteParkController();
const listByCarPlateController = new ListByCarPlateController();

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

parkingRoutes.delete('/:id', ensureAuthenticated, deleteParkController.handle);

parkingRoutes.get(
    '/list-by-plate',
    ensureAuthenticated,
    listByCarPlateController.handle,
);

export { parkingRoutes };
