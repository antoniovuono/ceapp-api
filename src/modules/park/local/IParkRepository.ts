import { IParkDTO } from '../dtos/IParkDTO';
import { Park } from '../infra/entities/Park';

interface IParkRepository {
    create(data: IParkDTO): Promise<Park>;
    listByUser(user_id: string): Promise<Park[]>;
    findByLicensePlate(car_id: string): Promise<Park>;
    delete(id: string): Promise<void>;
}

export { IParkRepository };
