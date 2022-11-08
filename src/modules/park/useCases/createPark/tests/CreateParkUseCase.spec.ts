/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppError } from '../../../../../errors/AppError';
import { ParkRepositoryInMemory } from '../../../local/in-memory/ParkRepositoryInMemory';
import { CreateParkUseCase } from '../CreateParkUseCase';

describe('Create Park', () => {
    let createParkUseCase: CreateParkUseCase;
    let parkRepositoryInMemory: ParkRepositoryInMemory;

    beforeEach(() => {
        parkRepositoryInMemory = new ParkRepositoryInMemory();
        createParkUseCase = new CreateParkUseCase(parkRepositoryInMemory);
    });

    it('Should be able to create a new park', async () => {
        const park = await createParkUseCase.execute({
            car_id: 'MIO-5594',
            car_brand: 'Subaru',
            car_model: 'Imprenza',
            car_color: 'Preto',
        });

        expect(park).toHaveProperty('id');
        expect(park).toHaveProperty('departure_date');
    });

    it('Should not be able to create a new park to a car with already be parked', async () => {
        await createParkUseCase.execute({
            car_id: 'MIO-5594',
            car_brand: 'Subaru',
            car_model: 'Imprenza',
            car_color: 'Preto',
        });

        expect(async () => {
            await createParkUseCase.execute({
                car_id: 'MIO-5594',
                car_brand: 'Subaru',
                car_model: 'Imprenza',
                car_color: 'Preto',
            });
        }).rejects.toEqual(new AppError('Car already parked!', 400));
    });
});
