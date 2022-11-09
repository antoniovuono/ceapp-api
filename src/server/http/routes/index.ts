import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { parkingRoutes } from './park.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/park', parkingRoutes);
router.use('/users', usersRoutes);
router.use('/sessions', authenticateRoutes);

export { router };
