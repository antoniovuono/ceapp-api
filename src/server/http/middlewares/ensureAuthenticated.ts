import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../../errors/AppError';
import { UsersRepository } from '../../../modules/accounts/infra/repositories/UsersRepository';

type IPayload = {
    sub: string;
};

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authenticationHeader = request.headers.authorization;

    if (!authenticationHeader) {
        throw new AppError(
            'Unauthorized: Token authentication not found from user request.',
            401,
        );
    }

    const [, token] = authenticationHeader.split(' ');

    try {
        const { sub: user_id } = verify(
            token,
            'b55dbdf0e330a2feaafe049bd1c9085f',
        ) as IPayload;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User does not exists', 401);
        }

        request.user = {
            id: user.id,
        };

        next();
    } catch (err) {
        throw new AppError('Unauthorized: Invalid token.', 401);
    }
}
