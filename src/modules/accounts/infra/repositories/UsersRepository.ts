import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../database';
import { IUsersDTO } from '../../dtos/IUsersDTO';
import { IUsersRepository } from '../../local/IUsersRepository';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    async createAccount(data: IUsersDTO): Promise<User> {
        const user = this.repository.create(data);

        await this.repository.save(user);

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const findUser = await this.repository.findOneBy({ email });

        return findUser;
    }

    async findByCPF(cpf: string): Promise<User> {
        const findUser = await this.repository.findOneBy({ cpf });

        return findUser;
    }
}

export { UsersRepository };
