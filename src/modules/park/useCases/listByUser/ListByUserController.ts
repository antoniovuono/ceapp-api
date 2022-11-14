import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { ListByUserUseCase } from './ListByUserUseCase';

class ListByUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const listByUser = container.resolve(ListByUserUseCase);

        const parkList = await listByUser.execute(id);

        return response.status(200).json(parkList);
    }
}

export { ListByUserController };
