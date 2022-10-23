import { Router } from 'express';
import { parkingRoutes } from './park.routes';

const router = Router();

router.use('/park', parkingRoutes);

export { router };
