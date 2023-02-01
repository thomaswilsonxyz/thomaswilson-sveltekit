import { parse, format as formatDate, differenceInCalendarDays, isSameDay } from 'date-fns';
import { SunriseSunsetDayGuess } from './SunriseSunsetDayGuess.js';
import { SunriseSunsetDayGuessSet } from './SunriseSunsetGuessSet.js';
import { GuessType } from './GuessType.js';

class SunriseSunsetStreak {
    readonly longestStreak: number;
    private readonly allStreaks: number[];
    readonly mostRecentStreak: number;

    constructor(correctDays: Date[], today = new Date()) {
        const isCorrectDaysEmpty = correctDays.length === 0;

        if (isCorrectDaysEmpty) {
            console.log(`No correct days recorded.`);
            this.longestStreak = 0;
            this.mostRecentStreak = 0;
            this.allStreaks = [];
            return;
        }

        // A (reverse-order) list of streaks in the lis tof correct days.
        const sortedDays = correctDays.sort((a, b) => b.getTime() - a.getTime());

        const allStreaks: number[] = sortedDays.reduce(
            (streaks: number[], day, index, days) => {
                const currentStreakLength = streaks.at(-1);

                const daysBetween = differenceInCalendarDays(day, days.at(index + 1));

                console.log(
                    streaks,
                    `Day ${index}: ${formatDate(
                        day,
                        'yyyy-MM-dd'
                    )}, streak length: ${currentStreakLength}, days between: ${daysBetween}`
                );

                if (isNaN(daysBetween)) {
                    // We're on the last day, so just return the streaks
                    return streaks;
                } else if (daysBetween === 1) {
                    // Add one to the last item in the streaks array
                    return [...streaks.slice(0, -1), currentStreakLength + 1];
                } else {
                    // We've hit a gap, so start a new streak
                    return [...streaks, 1];
                }
            },
            [1]
        );

        this.longestStreak = allStreaks.length > 0 ? Math.max(...allStreaks) : 0;
        this.allStreaks = allStreaks;

        const isTodayMissingFromCorrectDays = !correctDays.some((day) => isSameDay(day, today));

        // The streaks are in reverse order, so the most recent streak is the last one.
        if (allStreaks[0] === undefined) {
            this.mostRecentStreak = 0;
        } else if (isTodayMissingFromCorrectDays) {
            this.mostRecentStreak = 0;
        } else {
            this.mostRecentStreak = allStreaks[0];
        }
    }
}

export class SunriseSunsetStreakCalculator {
    private readonly todayDate: Date;

    constructor(today: string) {
        this.todayDate = parse(today, 'yyyy-MM-dd', new Date());
    }

    private daysAsDates(dayStrings: string[]): Date[] {
        return dayStrings.map((day) => parse(day, 'yyyy-MM-dd', new Date()));
    }

    getEmojiForHistory(correctDays: string[], incorrectDays: string[], length = 7): string {
        const correctGuesses = correctDays.map((day) => new SunriseSunsetDayGuess(day, GuessType.correct));
        const incorrectGuesses = incorrectDays.map((day) => new SunriseSunsetDayGuess(day, GuessType.incorrect));
        const allGuesses = new SunriseSunsetDayGuessSet([...correctGuesses, ...incorrectGuesses]);

        const streak: string = allGuesses.getLastDays(length).reduce((streak, guess) => {
            return streak + guess.emoji;
        }, '');

        return streak;
    }

    getCurrentStreakLengthForCorrectDays(correctDays: string[]): number {
        const streak = new SunriseSunsetStreak(this.daysAsDates(correctDays), this.todayDate);

        return streak.mostRecentStreak;
    }

    getShareableStatement(correctDays: string[], incorrectDays: string[], today: Date, joiningString = '\n'): string {
        const streak = new SunriseSunsetStreak(this.daysAsDates(correctDays));
        const todayFormatted = formatDate(today, 'yyyy-MM-dd');

        const emoji = this.getEmojiForHistory(correctDays, incorrectDays);
        const currentStreak = this.getCurrentStreakLengthForCorrectDays(correctDays);

        return [
            `Sunrise, Sunset?`,
            todayFormatted,
            emoji,
            `Current Streak: ${currentStreak}`,
            `Longest Streak: ${streak.longestStreak}`,
        ].join(joiningString);
    }
}
