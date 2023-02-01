import { parse } from 'date-fns';
import { GuessType } from './GuessType.js';

export class SunriseSunsetDayGuess {
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

    constructor(dayString: string, guessType: GuessType) {
        this.day = parse(dayString, 'yyyy-MM-dd', new Date());
        this.emoji = SunriseSunsetDayGuess.getEmojiForGuessType(guessType);
    }
}
