import { parse, isAfter, differenceInCalendarDays } from 'date-fns';

export class SunriseSunsetStreakCalculator {
    private readonly todayDate: Date;
    constructor(private readonly today: string) {
        this.todayDate = parse(today, 'yyyy-MM-dd', new Date());
    }

    getStreakLength(correctDays: string[]): number {
        if (correctDays.length === 0) {
            console.log(`No correct days, returning 0.`);
            return 0;
        } else if (!correctDays.some((day) => day === this.today)) {
            console.log(`Today is not in the list of correct days`);
            return 0;
        }

        const daysAsDates = correctDays.map((day) => parse(day, 'yyyy-MM-dd', new Date()));
        const sortedDays = daysAsDates.sort((a, b) => b.getTime() - a.getTime());

        const sortedDaysWithoutToday = correctDays
            .filter((day) => day !== this.today)
            .map((day) => parse(day, 'yyyy-MM-dd', new Date()))
            .sort((a, b) => b.getTime() - a.getTime());
        const daysBetweenTodayAndMostRecentDay = differenceInCalendarDays(this.todayDate, sortedDaysWithoutToday[0]);

        if (daysBetweenTodayAndMostRecentDay > 1) {
            console.log(`Today is more than one day after the most recent correct day`);
            return 1;
        }

        let streakLength = 1;
        for (const [index, day] of sortedDays.entries()) {
            const nextDay = sortedDays[index + 1];

            if (nextDay === undefined) {
                console.log(`No next day, returning streak length of ${streakLength}`);
                return streakLength;
            }

            const daysBetween = differenceInCalendarDays(day, nextDay);
            console.log(`Days Between ${day} - ${nextDay}`, daysBetween);

            if (daysBetween === 1) {
                streakLength++;
            } else {
                console.log(`Days between is not 1, returning streak length of ${streakLength}`);
                return streakLength;
            }
        }
    }
}
