import { AppError } from '../../../../../errors/AppError';
import { UsersRepositoryInMemory } from '../../../local/in-memory/UsersRepositoryInMemory';
import { CreateAccountUseCase } from '../CreateAccountUseCase';

describe('Create User Account', () => {
    let createAccountUseCase: CreateAccountUseCase;
    let usersRepositoryInMemory: UsersRepositoryInMemory;

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createAccountUseCase = new CreateAccountUseCase(
            usersRepositoryInMemory,
        );
    });

    it('Should be able to create a new user account', async () => {
        const user = await createAccountUseCase.execute({
            name: 'Test Place',
            email: 'test@example.com',
            password: '123456',
            cpf: '01234567890',
        });

        expect(user).toHaveProperty('id');
    });

    it('Should not be able to create a new user account with a existing email', async () => {
        await createAccountUseCase.execute({
            name: 'Test Place',
            email: 'test@example.com',
            password: '123456',
            cpf: '01234567890',
        });

        expect(async () => {
            await createAccountUseCase.execute({
                name: 'Test Place Second',
                email: 'test@example.com',
                password: '123456',
                cpf: '01234567892',
            });
        }).rejects.toEqual(new AppError('Email already in use!', 400));
    });

    it('Should not be able to create a account if a existing cpf', async () => {
        await createAccountUseCase.execute({
            name: 'Test Place',
            email: 'test@example.com',
            password: '123456',
            cpf: '01234567890',
        });

        expect(async () => {
            await createAccountUseCase.execute({
                name: 'Test Place 2',
                email: 'test2@example.com',
                password: '123456',
                cpf: '01234567890',
            });
        }).rejects.toEqual(new AppError('cpf already in use!', 400));
    });
});
