import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAccountUseCase } from './CreateAccountUseCase';

class CreateAccountController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, name, password, cpf } = request.body;

        const createAccountUseCase = container.resolve(CreateAccountUseCase);

        createAccountUseCase.execute({
            name,
            email,
            password,
            cpf,
        });

        return response
            .status(201)
            .json({ message: 'User created successfully' });
    }
}

export { CreateAccountController };
