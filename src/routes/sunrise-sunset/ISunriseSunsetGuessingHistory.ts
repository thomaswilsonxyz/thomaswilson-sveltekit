type SunriseSunsetOption = 'sunrise' | 'sunset';

export interface ISunriseSunsetGuessingHistory {
    mostRecentGuessDate: undefined | string; // e.g. "2023-01-26"
    totalNumberOfGuesses: number;
    guesses: SunriseSunsetOption[];
    incorrectDays: string[]; // e.g. ["2023-01-26", "2023-01-27"]
    correctDays: string[]; // e.g. ["2023-01-28", "2023-01-29"]
}
