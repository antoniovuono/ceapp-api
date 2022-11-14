import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AddPricesUseCase } from './AddPricesUseCase';

class AddPricesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { first_hour, other_hours } = request.body;
        const { id } = request.user;

        const addPricesUseCase = container.resolve(AddPricesUseCase);

        await addPricesUseCase.execute({
            user_id: id,
            first_hour,
            other_hours,
        });

        return response
            .status(204)
            .json({ message: 'Prices updated successfully' });
    }
}

export { AddPricesController };
