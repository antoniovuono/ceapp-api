import { Router } from 'express';
import { CreateParkController } from '../../../modules/park/useCases/createPark/CreateParkController';

const parkingRoutes = Router();

const createParkController = new CreateParkController();

parkingRoutes.post('/', createParkController.handle);

export { parkingRoutes };
