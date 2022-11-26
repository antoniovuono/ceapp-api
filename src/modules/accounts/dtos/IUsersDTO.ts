export interface IUsersDTO {
    id?: string;
    name: string;
    email: string;
    password: string;
    cpf: string;
    admin?: boolean;
    first_hour?: number;
    other_hours?: number;
}
