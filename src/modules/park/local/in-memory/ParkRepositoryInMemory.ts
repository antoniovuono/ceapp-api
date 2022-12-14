import { IParkDTO } from '../../dtos/IParkDTO';
import { Park } from '../../infra/entities/Park';
import { IParkRepository } from '../IParkRepository';

class ParkRepositoryInMemory implements IParkRepository {
    parks: Park[] = [];

    async create(data: IParkDTO): Promise<Park> {
        const park = new Park();

        Object.assign(park, {
            ...data,
            departure_date: new Date(),
        });

        this.parks.push(park);

        return park;
    }

    async findByLicensePlate(car_id: string): Promise<Park> {
        const parkByPlate = this.parks.find(park => park.car_id === car_id);

        return parkByPlate;
    }

    async listByUser(user_id: string): Promise<Park[]> {
        const parks = this.parks.filter(park => park.user_id === user_id);
        return parks;
    }

    async delete(id: string): Promise<void> {
        const parkIndex = this.parks.findIndex(park => park.id === id);
        this.parks.splice(parkIndex, 1);
    }
}

export { ParkRepositoryInMemory };
