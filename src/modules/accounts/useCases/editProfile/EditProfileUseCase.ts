import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../local/IUsersRepository';

interface IRequest {
    name: string;
    password: string;
    user_id: string;
}

@injectable()
class EditProfileUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    async execute({ name, password, user_id }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found', 401);
        }

        const hashPassword = await hash(password, 8);

        await this.usersRepository.updateName(name, user_id);
        await this.usersRepository.updatePassword(user_id, hashPassword);
    }
}

export { EditProfileUseCase };
