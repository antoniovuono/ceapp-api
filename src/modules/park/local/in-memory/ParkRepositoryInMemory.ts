import { IParkDTO } from '../../dtos/IParkDTO';
import { Park } from '../../infra/entities/Park';
import { IParkRepository } from '../IParkRepository';

class ParkRepositoryInMemory implements IParkRepository {
    parks: Park[] = [];

    async create({
        id,
        car_id,
        car_brand,
        car_model,
        car_color,
        departure_date,
        left_date,
        total_amount,
        created_at,
        updated_at,
    }: IParkDTO): Promise<Park> {
        const park = new Park();

        Object.assign(park, {
            id,
            car_id,
            car_brand,
            car_model,
            car_color,
            departure_date,
            left_date,
            total_amount,
            created_at,
            updated_at,
        });

        this.parks.push(park);

        return park;
    }

    async listAll(): Promise<Park[]> {
        const parkList = this.parks;

        return parkList;
    }

    async listByLicensePlate(car_id: string): Promise<Park[]> {
        const parkByPlate = this.parks.filter(
            element => element.car_id === car_id,
        );

        return parkByPlate;
    }

    async delete(id: string): Promise<void> {
        const parkIndex = this.parks.findIndex(park => park.id === id);
        this.parks.splice(parkIndex, 1);
    }
}

export { ParkRepositoryInMemory };
