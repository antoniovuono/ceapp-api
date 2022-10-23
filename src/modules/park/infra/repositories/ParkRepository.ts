import { IParkDTO } from '../../dtos/IParkDTO';
import { IParkRepository } from '../../local/IParkRepository';
import { Park } from '../entities/Park';

class ParkRepository implements IParkRepository {
    create(data: IParkDTO): Promise<Park> {
        throw new Error('Method not implemented.');
    }

    listAll(): Promise<Park[]> {
        throw new Error('Method not implemented.');
    }

    findByLicensePlate(car_id: string): Promise<Park[]> {
        throw new Error('Method not implemented.');
    }

    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

export { ParkRepository };
