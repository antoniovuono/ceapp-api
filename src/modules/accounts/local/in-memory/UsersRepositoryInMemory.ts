import { IUsersDTO } from '../../dtos/IUsersDTO';
import { User } from '../../infra/entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];

    async create(data: IUsersDTO): Promise<User> {
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

    async findByCPF(cpf: string): Promise<User> {
        const userByCPF = this.users.find(user => user.cpf === cpf);
        return userByCPF;
    }
}

export { UsersRepositoryInMemory };
