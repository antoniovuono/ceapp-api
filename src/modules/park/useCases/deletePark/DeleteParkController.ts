import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteParkUseCase } from './DeleteParkUseCase';

class DeleteParkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const park_id = request.params.id;

        const deleteParkUseCase = container.resolve(DeleteParkUseCase);

        await deleteParkUseCase.execute({ park_id, user_id: id });

        return response
            .status(201)
            .json({ message: 'park deleted successfully' });
    }
}

export { DeleteParkController };
