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

    async findById(id: string): Promise<User> {
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

    async updateFirstHourPrice(
        user_id: string,
        first_hour: number,
    ): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ first_hour })
            .where('id = :id', { id: user_id })
            .execute();
    }

    async updateOtherHoursPrice(
        user_id: string,
        other_hours: number,
    ): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ other_hours })
            .where('id = :id', { id: user_id })
            .execute();
    }

    async updateName(name: string, user_id: string): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ name })
            .where('id = :id', { id: user_id })
            .execute();
    }

    async updatePassword(user_id: string, password: string): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ password })
            .where('id = :id', { id: user_id })
            .execute();
    }
}

export { UsersRepository };
