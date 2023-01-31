import { parse, format as formatDate, isAfter, isBefore, isSameDay, addDays, differenceInCalendarDays } from 'date-fns';

enum GuessType {
    correct = 'correct',
    incorrect = 'incorrect',
    missing = 'missing',
}

class SunriseSunsetDayGuess {
    readonly day: Date;
    readonly emoji: string;

    private static getEmojiForGuessType(guessType: GuessType): string {
        switch (guessType) {
            case GuessType.correct:
                return '🎉';
            case GuessType.incorrect:
                return '💔';
            case GuessType.missing:
                return '🥷';
        }
    }

    constructor(dayString: string, private readonly guessType: GuessType) {
        this.day = parse(dayString, 'yyyy-MM-dd', new Date());
        this.emoji = SunriseSunsetDayGuess.getEmojiForGuessType(guessType);
    }
}

class SunriseSunsetDayGuessSet {
    private readonly sortedGuesses: SunriseSunsetDayGuess[];
    private readonly sortedGuessesWithMissingDays: SunriseSunsetDayGuess[];

    constructor(guesses: SunriseSunsetDayGuess[]) {
        this.sortedGuesses = guesses.sort((a, b) => b.day.getTime() - a.day.getTime());
        const missingGuesses = this.getGuessesForMissingDays();
        this.sortedGuessesWithMissingDays = SunriseSunsetDayGuessSet.sortGuesses([...guesses, ...missingGuesses]);
    }

    private static sortGuesses(guesses: SunriseSunsetDayGuess[]): SunriseSunsetDayGuess[] {
        return guesses.sort((a, b) => b.day.getTime() - a.day.getTime());
    }

    private isGuessPresentForDay(date: Date): boolean {
        return this.sortedGuesses.some((guess) => isSameDay(guess.day, date));
    }

    private getGuessesForMissingDays(): SunriseSunsetDayGuess[] {
        const earliestDate: Date | undefined = this.sortedGuesses[this.sortedGuesses.length - 1]?.day;

        if (!earliestDate) {
            return [];
        }

        const latestDate = this.sortedGuesses[0].day;
        let guessesForMissingDays: SunriseSunsetDayGuess[] = [];

        let currentDay = earliestDate;

        while (isBefore(currentDay, latestDate)) {
            const isPresent = this.isGuessPresentForDay(currentDay);

            if (!isPresent) {
                guessesForMissingDays = [
                    ...guessesForMissingDays,
                    new SunriseSunsetDayGuess(formatDate(currentDay, 'yyyy-MM-dd'), GuessType.missing),
                ];
            }
            currentDay = addDays(currentDay, 1);
        }

        return guessesForMissingDays;
    }

    getLastDays(maxDays = 10): SunriseSunsetDayGuess[] {
        return this.sortedGuessesWithMissingDays.slice(0, maxDays);
    }
}

class SunriseSunsetStreak {
    readonly longestStreak: number;
    private readonly allStreaks: number[];
    readonly mostRecentStreak: number;

    constructor(correctDays: Date[]) {
        if (correctDays.length === 0) {
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

        // The streaks are in reverse order, so the most recent streak is the last one.
        console.log('allStreaks', allStreaks);
        this.mostRecentStreak = allStreaks[0] ?? 0;
        this.longestStreak = allStreaks.length > 0 ? Math.max(...allStreaks) : 0;
        this.allStreaks = allStreaks;
    }
}

export class SunriseSunsetStreakCalculator {
    private readonly todayDate: Date;
    constructor(private readonly today: string) {
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

    getShareableStatement(correctDays: string[], incorrectDays: string[], today: Date, joiningString = '\n'): string {
        const emoji = this.getEmojiForHistory(correctDays, incorrectDays);
        const todayFormatted = formatDate(today, 'yyyy-MM-dd');
        const streak = new SunriseSunsetStreak(this.daysAsDates(correctDays));

        return [
            `Sunrise, Sunset?`,
            todayFormatted,
            emoji,
            `Current Streak: ${streak.mostRecentStreak}`,
            `Longest Streak: ${streak.longestStreak}`,
        ].join(joiningString);
    }

    getStreakLength(correctDays: string[]): number {
        console.log(`getStreakLength`);
        console.log(correctDays);

        if (correctDays.length === 0) {
            console.log(`No correct days, returning 0.`);
            return 0;
        } else if (!correctDays.some((day) => day === this.today)) {
            console.log(`Today is not in the list of correct days`);
            return 0;
        }

        const daysAsDates = this.daysAsDates(correctDays);

        const sortedDaysWithoutToday = correctDays
            .filter((day) => day !== this.today)
            .map((day) => parse(day, 'yyyy-MM-dd', new Date()))
            .sort((a, b) => b.getTime() - a.getTime());

        const daysBetweenTodayAndMostRecentDay = differenceInCalendarDays(this.todayDate, sortedDaysWithoutToday[0]);

        if (daysBetweenTodayAndMostRecentDay > 1) {
            console.log(`Today is more than one day after the most recent correct day`);
            return 1;
        }

        const streaks = new SunriseSunsetStreak(daysAsDates);

        return streaks.mostRecentStreak;
    }
}
