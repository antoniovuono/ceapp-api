import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IParkDTO } from '../../dtos/IParkDTO';
import { Park } from '../../infra/entities/Park';
import { IParkRepository } from '../../local/IParkRepository';

@injectable()
class CreateParkUseCase {
    constructor(
        @inject('ParkRepository')
        private parksRepository: IParkRepository,
    ) {}

    async execute({
        user_id,
        car_id,
        car_brand,
        car_model,
        car_color,
    }: IParkDTO): Promise<Park> {
        const carAlreadyParked = await this.parksRepository.findByLicensePlate(
            car_id,
            user_id,
        );

        if (carAlreadyParked) {
            throw new AppError('Car already parked!', 400);
        }

        const park = await this.parksRepository.create({
            user_id,
            car_id,
            car_brand,
            car_model,
            car_color,
        });

        return park;
    }
}

export { CreateParkUseCase };
