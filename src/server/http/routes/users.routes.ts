import { Router } from 'express';
import { AddPricesController } from '../../../modules/accounts/useCases/addPrices/AddPricesController';
import { CreateAccountController } from '../../../modules/accounts/useCases/createAccount/CreateAccountController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUsersController = new CreateAccountController();
const addPricesController = new AddPricesController();

usersRoutes.post('/', createUsersController.handle);
usersRoutes.patch(
    '/add-prices',
    ensureAuthenticated,
    addPricesController.handle,
);

export { usersRoutes };
