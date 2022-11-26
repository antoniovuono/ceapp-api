interface IPriceCalculatorProvider {
    calculatePrice(
        first_hour_amount: number,
        other_hours_amount: number,
        inUseHours: number,
    ): number;
}

export { IPriceCalculatorProvider };
