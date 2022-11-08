import { container } from 'tsyringe';
import { UsersRepository } from '../modules/accounts/infra/repositories/UsersRepository';
import { IUsersRepository } from '../modules/accounts/local/IUsersRepository';
import { ParkRepository } from '../modules/park/infra/repositories/ParkRepository';
import { IParkRepository } from '../modules/park/local/IParkRepository';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);

container.registerSingleton<IParkRepository>('ParkRepository', ParkRepository);
