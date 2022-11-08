import { Router } from 'express';
import { CreateAccountController } from '../../../modules/accounts/useCases/createAccount/CreateAccountController';

const usersRoutes = Router();

const createUsersController = new CreateAccountController();

usersRoutes.post('/', createUsersController.handle);

export { usersRoutes };
