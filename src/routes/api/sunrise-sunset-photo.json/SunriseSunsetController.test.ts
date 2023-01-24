import { it, describe, expect, beforeAll } from 'vitest'
import {
    type ISunriseSunsetController,
    SunriseSunsetController,
} from './SunriseSunsetController'

describe('SunriseSunsetController', () => {
    let controller: ISunriseSunsetController

    beforeAll(() => {
        controller = new SunriseSunsetController()
    })

    it(`Should return a known photo for a known date`, () => {
        // GIVEN
        const aKnownDate = new Date('2023-01-24T14:00Z')

        // WHEN
        const photo = controller.getSunriseSunsetPhotoForDate(aKnownDate)

        // THEN
        expect(photo).toStrictEqual({
            date: '2023-01-24',
            photo: {
                id: '-rSka4Bw-EU',
                description: 'No description',
                username: 'mikejerskine',
                username_url: 'https://unsplash.com/@mikejerskine',
                small_url:
                    'https://images.unsplash.com/photo-1475656106224-d72c2ab53e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDEyNTV8MHwxfHNlYXJjaHw5M3x8c3VucmlzZXxlbnwwfHx8fDE2NzQ1MDI4MzQ&ixlib=rb-4.0.3&q=80&w=400',
                sunrise_or_sunset: 'sunrise',
            },
        })
    })

    it(`should return null when there is no photo for the day`, () => {
        // GIVEN
        const aDateWithoutPhoto = new Date('2020-01-01T00:00Z')

        // WHEN
        const photo = controller.getSunriseSunsetPhotoForDate(aDateWithoutPhoto)

        // THEN
        expect(photo).toBeNull()
    })
})
