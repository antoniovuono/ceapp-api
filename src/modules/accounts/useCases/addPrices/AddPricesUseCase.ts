import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../local/IUsersRepository';

type IRequest = {
    user_id: string;
    first_hour: number;
    other_hours: number;
};

@injectable()
class AddPricesUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    async execute({
        user_id,
        first_hour,
        other_hours,
    }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found', 400);
        }

        await this.usersRepository.updateFirstHourPrice(user_id, first_hour);
        await this.usersRepository.updateOtherHoursPrice(user_id, other_hours);
    }
}

export { AddPricesUseCase };
