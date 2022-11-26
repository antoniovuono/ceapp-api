import { AppError } from '../../../../../errors/AppError';
import { UsersRepositoryInMemory } from '../../../local/in-memory/UsersRepositoryInMemory';
import { CreateAccountUseCase } from '../../createAccount/CreateAccountUseCase';
import { AuthenticateUserUseCase } from '../AuthenticateUserUseCase';

let createAccountUseCase: CreateAccountUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe('Authenticate User', () => {
    beforeAll(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createAccountUseCase = new CreateAccountUseCase(
            usersRepositoryInMemory,
        );
        authenticateUserUseCase = new AuthenticateUserUseCase(
            usersRepositoryInMemory,
        );
    });

    it('Should be able authenticate user', async () => {
        const user = await createAccountUseCase.execute({
            name: 'Test',
            email: 'test@example.com',
            password: 'test',
            cpf: '123456789',
        });

        const userAunthenticated = await authenticateUserUseCase.execute({
            email: user.email,
            password: 'test',
        });

        expect(userAunthenticated).toHaveProperty('token');
    });

    it('Should not be able to authenticate a non existing user', async () => {
        expect(
            authenticateUserUseCase.execute({
                email: 'nonuseremail@test.com',
                password: 'correct_password',
            }),
        ).rejects.toEqual(new AppError('Email is incorrent!', 400));
    });

    it('Should not be able to authenticate with a incorrect password', async () => {
        await createAccountUseCase.execute({
            name: 'Test',
            email: 'test3@example.com',
            password: 'test',
            cpf: '123456789123',
        });

        expect(
            authenticateUserUseCase.execute({
                email: 'test3@example.com',
                password: 'test3',
            }),
        ).rejects.toEqual(new AppError('Password is incorrect!', 400));
    });
});
