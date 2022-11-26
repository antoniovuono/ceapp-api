import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { EditProfileUseCase } from './EditProfileUseCase';

class EditProfilleController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, password } = request.body;
        const { id } = request.user;

        const editProfileUseCase = container.resolve(EditProfileUseCase);
        await editProfileUseCase.execute({
            name,
            password,
            user_id: id,
        });

        return response
            .status(204)
            .json({ message: 'Profile updated successfully' });
    }
}

export { EditProfilleController };
