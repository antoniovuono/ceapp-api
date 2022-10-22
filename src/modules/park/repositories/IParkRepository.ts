import { Park } from '../infra/entities/Park';

interface IParkRepository {
    create(): Promise<Park>;
}

export { IParkRepository };
