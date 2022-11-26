import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ExitCarUseCase } from './ExitCarUseCase';

class ExitCarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const park_id = request.params.id;

        const exitCarUseCase = container.resolve(ExitCarUseCase);

        const res = await exitCarUseCase.execute({
            user_id: id,
            park_id,
        });

        return response.status(204).json(res);
    }
}

export { ExitCarController };
