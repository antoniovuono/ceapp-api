import { IUsersDTO } from '../../dtos/IUsersDTO';
import { User } from '../../infra/entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];

    async createAccount(data: IUsersDTO): Promise<User> {
        const user = new User();

        Object.assign(user, {
            ...data,
        });

        this.users.push(user);

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const userByEmail = this.users.find(user => user.email === email);

        return userByEmail;
    }
}

export { UsersRepositoryInMemory };
