interface IParkDTO {
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
}

export { IParkDTO };
