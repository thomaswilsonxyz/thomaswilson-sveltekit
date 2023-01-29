import { describe, it, expect } from 'vitest';
import { SunriseSunsetStreakCalculator } from './SunriseSunsetStreakCalculator.js';

describe('SunriseSunsetStreakCalculator', () => {
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

    it(`should return a two day stream if it's the most recent`, () => {
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
