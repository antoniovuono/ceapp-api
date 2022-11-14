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

    async create(data: IUsersDTO): Promise<User> {
        const user = this.repository.create(data);

        await this.repository.save(user);

        return user;
    }

    findById(id: string): Promise<User> {
        const user = this.repository.findOneBy({ id });

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.repository.findOneBy({ email });
        return user;
    }

    async findByCPF(cpf: string): Promise<User> {
        const findUser = this.repository.findOneBy({ cpf });
        return findUser;
    }
}

export { UsersRepository };
