import { isSameDay, isBefore, addDays, format as formatDate } from 'date-fns';
import { SunriseSunsetDayGuess } from './SunriseSunsetDayGuess.js';
import { GuessType } from './GuessType.js';

export class SunriseSunsetDayGuessSet {
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
