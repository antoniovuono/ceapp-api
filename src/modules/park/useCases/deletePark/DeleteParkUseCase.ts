import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../../accounts/local/IUsersRepository';
import { IParkRepository } from '../../local/IParkRepository';

type IRequest = {
    park_id: string;
    user_id: string;
};

@injectable()
class DeleteParkUseCase {
    constructor(
        @inject('ParkRepository')
        private parkRepository: IParkRepository,
        @inject('UsersRepository') private usersRepository: IUsersRepository,
    ) {}

    async execute({ park_id, user_id }: IRequest): Promise<void> {
        const park = await this.parkRepository.findById(park_id);

        if (!park) {
            throw new AppError('Park not found!', 401);
        }

        const user = await this.usersRepository.findById(user_id);

        if (user.id !== park.user_id) {
            throw new AppError(
                'Unauthorized: You did not have permission to delete this registry',
                404,
            );
        }

        await this.parkRepository.delete(park_id);
    }
}

export { DeleteParkUseCase };
