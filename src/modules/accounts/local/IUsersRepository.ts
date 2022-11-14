import { IUsersDTO } from '../dtos/IUsersDTO';
import { User } from '../infra/entities/User';

interface IUsersRepository {
    create(data: IUsersDTO): Promise<User>;
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByCPF(cpf: string): Promise<User>;
}

export { IUsersRepository };
