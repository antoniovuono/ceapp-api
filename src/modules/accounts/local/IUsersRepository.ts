import { IUsersDTO } from '../dtos/IUsersDTO';
import { User } from '../infra/entities/User';

interface IUsersRepository {
    createAccount(data: IUsersDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByCPF(cpf: string): Promise<User>;
}

export { IUsersRepository };
