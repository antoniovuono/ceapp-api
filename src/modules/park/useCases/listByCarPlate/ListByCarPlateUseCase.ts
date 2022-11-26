import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../../accounts/local/IUsersRepository';
import { IParkRepository } from '../../local/IParkRepository';

interface IRequest {
    license_plate: string | any;
    user_id: string;
}

@injectable()
class ListByCarPlateUseCase {
    constructor(
        @inject('ParkRepository')
        private parksRepository: IParkRepository,
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    async execute({ license_plate, user_id }: IRequest) {
        const findByLicensePlate =
            await this.parksRepository.findByLicensePlate(
                license_plate,
                user_id,
            );

        if (!findByLicensePlate) {
            throw new AppError('Park not found', 401);
        }

        return findByLicensePlate;
    }
}

export { ListByCarPlateUseCase };
