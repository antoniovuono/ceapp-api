import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateParkUseCase } from './CreateParkUseCase';

class CreateParkController {
    async handle(
        request: Request | any,
        response: Response,
    ): Promise<Response> {
        const { car_id, car_brand, car_model, car_color } = request.body;
        const { id } = request.user;

        const createParkUseCase = container.resolve(CreateParkUseCase);

        await createParkUseCase.execute({
            user_id: id,
            car_id,
            car_brand,
            car_model,
            car_color,
        });

        return response
            .status(201)
            .json({ message: 'Park created successfully' });
    }
}

export { CreateParkController };
