import { Router } from 'express';
import { AddPricesController } from '../../../modules/accounts/useCases/addPrices/AddPricesController';
import { CreateAccountController } from '../../../modules/accounts/useCases/createAccount/CreateAccountController';
import { EditProfilleController } from '../../../modules/accounts/useCases/editProfile/EditProfileController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUsersController = new CreateAccountController();
const addPricesController = new AddPricesController();
const updateProfilleController = new EditProfilleController();

usersRoutes.post('/', createUsersController.handle);
usersRoutes.patch(
    '/add-prices',
    ensureAuthenticated,
    addPricesController.handle,
);
usersRoutes.patch(
    '/update-profile',
    ensureAuthenticated,
    updateProfilleController.handle,
);

export { usersRoutes };
