export interface SunriseOrSunsetPhotoSet {
    total: number
    total_pages: number
    search_term: string
    results: SunriseOrSunsetPhoto[]
}

export interface SunriseOrSunsetPhoto {
    id: string
    description: string
    username: string
    username_url: string
    small_url: string
}
