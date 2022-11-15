import { inject, injectable } from 'tsyringe';
import { IDateProvider } from '../../../../container/providers/DateProvider/IDateProvider';
import { AppError } from '../../../../errors/AppError';
import { IParkRepository } from '../../local/IParkRepository';

type IRequest = {
    park_id: string;
    left_hour: Date;
};

@injectable()
class ExitCarUseCase {
    constructor(
        @inject('ParkRepository')
        private parksRepository: IParkRepository,
        @inject('DateProvider')
        private dateProvider: IDateProvider,
    ) {}

    async execute({ park_id }: IRequest): Promise<void> {
        const park = await this.parksRepository.findById(park_id);

        if (!park) {
            throw new AppError('Park not found!', 401);
        }

        const currentDate = this.dateProvider.currentDate();

        await this.parksRepository.updateLeftHour(currentDate, park_id);

        const inUseHours = this.dateProvider.compareHoursOfUse(
            park.departure_date,
            currentDate,
        );
    }
}

export { ExitCarUseCase };
