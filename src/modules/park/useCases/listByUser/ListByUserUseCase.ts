import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../../accounts/local/IUsersRepository';
import { IParkRepository } from '../../local/IParkRepository';

type IRequest = {
    user_id: string;
    park_id: string;
};

@injectable()
class ListByUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('ParkRepository')
        private parksRepository: IParkRepository,
    ) {}

    async execute({ user_id, park_id }: IRequest) {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found', 401);
        }

        const parks = await this.parksRepository.listByUser(user_id);

        return parks;
    }
}

export { ListByUserUseCase };
