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

    async findByLicensePlate(car_id: string, user_id: string): Promise<Park> {
        const park = this.repository.findOneBy({
            car_id,
            user_id,
        });

        return park;
    }

    async listByUser(user_id: string): Promise<Park[]> {
        const parks = this.repository.find({
            where: { user_id },
        });

        return parks;
    }

    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

export { ParkRepository };
