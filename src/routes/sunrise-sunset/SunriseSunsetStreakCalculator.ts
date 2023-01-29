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

        // A (reverse-order) list of streaks in the lis tof correct days.
        const allStreaks: number[] = sortedDays.reduce((streaks: number[], day, index, days) => {
            const currentStreakLength = streaks[0] ?? 1;
            const daysBetween = differenceInCalendarDays(day, days[index + 1]);

            if (daysBetween === 1) {
                // The streak continues ! Add a day.
                streaks[0] = currentStreakLength + 1;
            } else {
                // We've hit a gap, so start a new streak
                streaks.unshift(1);
            }

            return streaks;
        }, []);

        // The streaks are in reverse order, so the most recent streak is the last one.
        return allStreaks[allStreaks.length - 1];
    }
}
