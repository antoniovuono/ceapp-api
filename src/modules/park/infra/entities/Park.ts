import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('parks')
class Park {
    @PrimaryColumn()
    id: string;

    @Column()
    car_id: string;

    @Column()
    car_brand: string;

    @Column()
    car_model: string;

    @Column()
    car_color: string;

    @Column()
    departure_date: Date;

    @Column()
    left_date: Date;

    @Column()
    total_amount: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Park };
