import { container } from 'tsyringe';
import { ParkRepository } from '../modules/park/infra/repositories/ParkRepository';
import { IParkRepository } from '../modules/park/local/IParkRepository';

container.registerSingleton<IParkRepository>('ParkRepository', ParkRepository);
