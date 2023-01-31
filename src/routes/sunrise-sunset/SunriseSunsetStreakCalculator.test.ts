import { describe, it, expect, beforeAll } from 'vitest';
import { SunriseSunsetStreakCalculator } from './SunriseSunsetStreakCalculator.js';

describe('SunriseSunsetStreakCalculator', () => {
    describe(`Streak Length`, () => {
        const anyDay = '2023-01-29';
        it(`should recognise an empty streak`, () => {
            // GIVEN
            const correctDays = [];

            // WHEN
            const currentStreakLength = new SunriseSunsetStreakCalculator(anyDay).getStreakLength(correctDays);

            // THEN
            expect(currentStreakLength).toBe(0);
        });

        it(`should return a one-day streak when there is a gap between today and a previous streak`, () => {
            // GIVEN
            const correctDays = ['2023-01-29', '2023-01-27', '2023-01-26'];
            const today = '2023-01-29';

            // WHEN
            const currentStreakLength = new SunriseSunsetStreakCalculator(today).getStreakLength(correctDays);

            // THEN
            expect(currentStreakLength).toBe(1);
        });

        it(`should return a two day streak if it's the most recent`, () => {
            // GIVEN
            const correctDays = ['2023-01-29', '2023-01-28', '2023-01-26', '2023-01-25', '2023-01-24'];
            const today = '2023-01-29';

            // WHEN
            const currentStreakLength = new SunriseSunsetStreakCalculator(today).getStreakLength(correctDays);

            // THEN
            expect(currentStreakLength).toBe(2);
        });

        it(`should return recognise a one day streak`, () => {
            // GIVEN
            const correctDays = ['2023-01-28'];
            const today = '2023-01-28';

            // WHEN
            const currentStreakLength = new SunriseSunsetStreakCalculator(today).getStreakLength(correctDays);

            // THEN
            expect(currentStreakLength).toBe(1);
        });

        it(`should recognise a one-day streak with gaps`, () => {
            // GIVEN
            const correctDays = ['2023-01-26', '2023-01-27', '2023-01-31'];

            // WHEN
            const currentStreakLength = new SunriseSunsetStreakCalculator('2023-01-31').getStreakLength(correctDays);

            // THEN
            expect(currentStreakLength).toBe(1);
        });

        it(`should recognise a two day streak`, () => {
            // GIVEN
            const correctDays = ['2023-01-28', '2023-01-27'];
            const today = '2023-01-28';

            // WHEN
            const currentStreakLength = new SunriseSunsetStreakCalculator(today).getStreakLength(correctDays);

            // THEN
            expect(currentStreakLength).toBe(2);
        });

        it(`should recognise a three day streak`, () => {
            // GIVEN
            const correctDays = ['2023-01-28', '2023-01-27', '2023-01-26'];
            const today = '2023-01-28';

            // WHEN
            const currentStreakLength = new SunriseSunsetStreakCalculator(today).getStreakLength(correctDays);

            // THEN
            expect(currentStreakLength).toBe(3);
        });
    });

    describe(`Streak Visualisation`, () => {
        let calculator: SunriseSunsetStreakCalculator;

        beforeAll(() => {
            calculator = new SunriseSunsetStreakCalculator('2023-01-29');
        });

        it(`Sound visualise an empty streak`, () => {
            // GIVEN
            const correctDays = [];
            const incorrectDays = [];

            // WHEN
            const emojiVisualisation = calculator.getEmojiForHistory(correctDays, incorrectDays);

            // THEN
            expect(emojiVisualisation).toBe('');
        });

        it(`should visualise a simple correct-incorrect two day streak`, () => {
            // GIVEN
            const correctDays = ['2023-01-20'];
            const incorrectDays = ['2023-01-19'];

            // WHEN
            const emojiVisualisation = calculator.getEmojiForHistory(correctDays, incorrectDays);

            // THEN
            expect(emojiVisualisation).toBe('🎉💔');
        });

        it(`should handle a missing day`, () => {
            // GIVEN
            const correctDays = ['2023-01-20', '2023-01-21'];
            const incorrect = ['2023-01-18', '2023-01-22'];

            // WHEN
            const emojiVisualisation = calculator.getEmojiForHistory(correctDays, incorrect);

            // THEN
            expect(emojiVisualisation).toBe('💔🎉🎉🥷💔');
        });

        it(`should get a fully shareable streak when all things are empty`, () => {
            // GIVEN
            const correctDays = [];
            const incorrectDays = [];
            const today = new Date('2023-01-20T21:52Z');

            // WHEN
            const shareableStatement = calculator.getShareableStatement(correctDays, incorrectDays, today);

            // THEN
            const expected = `Sunrise, Sunset?\n2023-01-20\n\nCurrent Streak: 0\nLongest Streak: 0`;
            expect(shareableStatement).toStrictEqual(expected);
        });

        it(`should get a fully shareable streak`, () => {
            // GIVEN
            const correctDays = ['2023-01-26', '2023-01-27', '2023-01-31'];
            const incorrectDays = ['2023-01-28'];
            const today = new Date('2023-01-31T21:52Z');

            // WHEN
            const shareableStatement = calculator.getShareableStatement(correctDays, incorrectDays, today);

            // THEN
            const expected = `Sunrise, Sunset?\n2023-01-31\n🎉🥷🥷💔🎉🎉\nCurrent Streak: 1\nLongest Streak: 2`;
            expect(shareableStatement).toStrictEqual(expected);
        });
    });
});
