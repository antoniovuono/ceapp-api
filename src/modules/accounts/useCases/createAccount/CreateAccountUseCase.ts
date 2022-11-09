import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import { AppError } from '../../../../errors/AppError';
import { IUsersDTO } from '../../dtos/IUsersDTO';
import { User } from '../../infra/entities/User';
import { IUsersRepository } from '../../local/IUsersRepository';

@injectable()
class CreateAccountUseCase {
    constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository,
    ) {}

    async execute({ name, email, password, cpf }: IUsersDTO): Promise<User> {
        const emailAlreadyExists = await this.userRepository.findByEmail(email);

        if (emailAlreadyExists) {
            throw new AppError('Email already in use!', 400);
        }

        const cpfAlreadyExists = await this.userRepository.findByCPF(cpf);

        if (cpfAlreadyExists) {
            throw new AppError('cpf already in use!', 400);
        }

        const encryptedPassword = await hash(password, 8);

        const user = await this.userRepository.create({
            name,
            email,
            password: encryptedPassword,
            cpf,
        });

        return user;
    }
}

export { CreateAccountUseCase };
