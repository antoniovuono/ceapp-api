import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByCarPlateUseCase } from './ListByCarPlateUseCase';

class ListByCarPlateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const { license_plate } = request.body;

        const listByCarPlateUseCase = container.resolve(ListByCarPlateUseCase);

        const res = await listByCarPlateUseCase.execute({
            user_id: id,
            license_plate,
        });

        return response.status(201).json(res);
    }
}

export { ListByCarPlateController };
