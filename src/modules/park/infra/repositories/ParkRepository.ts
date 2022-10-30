import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database';
import { IParkDTO } from '../../dtos/IParkDTO';
import { IParkRepository } from '../../local/IParkRepository';
import { Park } from '../entities/Park';

class ParkRepository implements IParkRepository {
    private repository: Repository<Park>;

    constructor() {
        this.repository = AppDataSource.getRepository(Park);
    }

    async create(data: IParkDTO): Promise<Park> {
        const createPark = this.repository.create(data);

        await this.repository.save(createPark);

        return createPark;
    }

    listAll(): Promise<Park[]> {
        throw new Error('Method not implemented.');
    }

    findByLicensePlate(car_id: string): Promise<Park> {
        throw new Error('Method not implemented.');
    }

    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

export { ParkRepository };
