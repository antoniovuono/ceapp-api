import { inject, injectable } from 'tsyringe';
import { IDateProvider } from '../../../../container/providers/DateProvider/IDateProvider';
import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../../accounts/local/IUsersRepository';
import { IParkRepository } from '../../local/IParkRepository';

type IRequest = {
    park_id: string | any;
    user_id: string;
};

@injectable()
class ExitCarUseCase {
    constructor(
        @inject('ParkRepository')
        private parksRepository: IParkRepository,
        @inject('DateProvider')
        private dateProvider: IDateProvider,
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    async execute({ park_id, user_id }: IRequest): Promise<void> {
        const park = await this.parksRepository.findById(park_id);

        if (!park) {
            throw new AppError('Park not found!', 401);
        }

        const exitDate = this.dateProvider.currentDate();

        await this.parksRepository.updateLeftHour(exitDate, park_id);

        const inUseHours = this.dateProvider.compareHoursOfUse(
            park.departure_date,
            exitDate,
        );

        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found', 401);
        }

        if (user.id !== park.user_id) {
            throw new AppError(
                'Unauthorized: You did not have permission to acess this registry',
                404,
            );
        }

        const { first_hour, other_hours } = user;

        if (!first_hour || !other_hours) {
            throw new AppError(
                'User has no first_hour and no other_hours',
                401,
            );
        }

        if (inUseHours <= 1) {
            const first_hour_amont = Number(first_hour);

            await this.parksRepository.updateTotalAmount(
                first_hour_amont,
                park_id,
            );
        } else {
            const formattedInUseHours = inUseHours - 1;
            const inUseFormattedAmount = formattedInUseHours * other_hours;

            const totalAmount = Number(inUseFormattedAmount + first_hour);

            await this.parksRepository.updateTotalAmount(totalAmount, park_id);
        }
    }
}

export { ExitCarUseCase };
