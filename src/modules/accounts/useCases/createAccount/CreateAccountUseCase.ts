import { AppError } from '../../../../errors/AppError';
import { IUsersDTO } from '../../dtos/IUsersDTO';
import { User } from '../../infra/entities/User';
import { IUsersRepository } from '../../local/IUsersRepository';

class CreateAccountUseCase {
    constructor(private userRepository: IUsersRepository) {}

    async execute({ name, email, password, cpf }: IUsersDTO): Promise<User> {
        const emailAlreadyExists = await this.userRepository.findByEmail(email);

        if (emailAlreadyExists) {
            throw new AppError('Email already in use!', 400);
        }

        const user = this.userRepository.createAccount({
            name,
            email,
            password,
            cpf,
        });

        return user;
    }
}

export { CreateAccountUseCase };
