import { IParkDTO } from '../dtos/IParkDTO';
import { Park } from '../infra/entities/Park';

interface IParkRepository {
    create(data: IParkDTO): Promise<Park>;
    listByUser(user_id: string): Promise<Park[]>;
    findByLicensePlate(car_id: string, user_id: string): Promise<Park>;
    findById(id: string): Promise<Park>;
    updateLeftHour(left_date: Date, park_id: string): Promise<void>;
    updateTotalAmount(total_amount: number, park_id: string): Promise<void>;
    delete(park_id: string): Promise<void>;
}

export { IParkRepository };
