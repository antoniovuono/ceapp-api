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

    async findById(id: string): Promise<Park> {
        const parks = this.repository.findOneBy({ id });
        return parks;
    }

    async listByUser(user_id: string): Promise<Park[]> {
        const parks = this.repository.find({
            where: { user_id },
        });

        return parks;
    }

    async updateLeftHour(left_date: Date, park_id: string): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ left_date })
            .where('id = :id', { id: park_id })
            .execute();
    }

    async updateTotalAmount(
        total_amount: number,
        park_id: string,
    ): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ total_amount })
            .where('id = :id', { id: park_id })
            .execute();
    }

    async delete(park_id: string): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .delete()
            .from(Park)
            .where('id = :id', { id: park_id })
            .execute();
    }
}

export { ParkRepository };
