import { Router } from 'express';
import { parkingRoutes } from './park.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/park', parkingRoutes);
router.use('/users', usersRoutes);

export { router };
