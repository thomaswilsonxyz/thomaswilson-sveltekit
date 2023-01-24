import data from './data.json'
import { format as formatDate } from 'date-fns'

type Daytime = 'sunrise' | 'sunset'
interface DailyPhoto {
    date: string // e.g. "2023-01-24"
    photo: {
        id: string
        description: string
        username: string
        username_url: string
        small_url: string
        sunrise_or_sunset: Daytime
    }
}
export interface ISunriseSunsetController {
    getSunriseSunsetPhotoForDate(date: Date): DailyPhoto | null
}

export class SunriseSunsetController implements ISunriseSunsetController {
    private data: DailyPhoto[] = data.photos as any

    getSunriseSunsetPhotoForDate(date) {
        const formattedDate = formatDate(date, 'yyyy-MM-dd')

        return this.data.find((photo) => photo.date === formattedDate) ?? null
    }
}
