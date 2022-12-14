import { Router } from 'express';
import { AuthenticateUserController } from '../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authenticateRoutes = Router();

const userAuthenticatedController = new AuthenticateUserController();

authenticateRoutes.use('/', userAuthenticatedController.handle);

export { authenticateRoutes };
