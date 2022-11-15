interface IDateProvider {
    currentDate(): Date;
    convertToUtc(date: Date): string;
    compareHoursOfUse(departure_date: Date, left_date: Date): number;
}

export { IDateProvider };
