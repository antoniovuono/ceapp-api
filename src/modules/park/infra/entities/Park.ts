import { v4 as uuid } from 'uuid';

class Park {
    id: string;

    car_id: string;

    car_brand: string;

    car_model: string;

    car_color: string;

    departure_date: Date;

    left_date: Date;

    total_amount: number;

    created_at: Date;

    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Park };
