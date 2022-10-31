import { v4 as uuid } from 'uuid';

class User {
    id: string;

    name: string;

    email: string;

    password: string;

    cpf: string;

    admin: boolean;

    first_hour: number;

    other_hours: number;

    created_at: Date;

    Updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
