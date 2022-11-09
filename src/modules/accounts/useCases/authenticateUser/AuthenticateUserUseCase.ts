import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../local/IUsersRepository';

interface ISignInRequest {
    email: string;
    password: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,
    ) {}

    async execute({ email, password }: ISignInRequest) {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Email is incorrent!', 400);
        }

        const passwordIsCorrect = await compare(password, user.password);

        if (!passwordIsCorrect) {
            throw new AppError('Password is incorrect!', 400);
        }

        const token = sign({}, 'b55dbdf0e330a2feaafe049bd1c9085f', {
            subject: user.id,
            expiresIn: '5d',
        });

        const authenticateSession = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return authenticateSession;
    }
}

export { AuthenticateUserUseCase };
