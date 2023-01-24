import { SunriseSunsetController } from './SunriseSunsetController.js'

const controller = new SunriseSunsetController()

export const GET = async () => {
    const now = new Date()
    const body = controller.getSunriseSunsetPhotoForDate(now)

    const response = {
        status: 200,
        body,
    }

    return new Response(JSON.stringify(response.body))
}
