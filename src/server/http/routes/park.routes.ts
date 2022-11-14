import { Router } from 'express';
import { CreateParkController } from '../../../modules/park/useCases/createPark/CreateParkController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const parkingRoutes = Router();

const createParkController = new CreateParkController();

parkingRoutes.post('/', ensureAuthenticated, createParkController.handle);

export { parkingRoutes };
