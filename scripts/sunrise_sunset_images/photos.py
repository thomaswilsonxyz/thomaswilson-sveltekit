import json
import unsplash_search_results

class SunriseOrSunsetPhoto: 
    def __init__(
        self, 
        unsplash_search_result: unsplash_search_results.UnsplashSearchResult, 
        sunrise_or_sunset: str
    ):
        self.id = unsplash_search_result.id
        self.description = unsplash_search_result.description
        self.username = unsplash_search_result.username
        self.username_url = unsplash_search_result.username_url
        self.small_url = unsplash_search_result.small_url
        self.sunrise_or_sunset = sunrise_or_sunset

    @staticmethod 
    def from_json(data: dict) -> "SunriseOrSunsetPhoto":
        unsplash_search_result = unsplash_search_results.UnsplashSearchResult(
            data={
                "id": data["id"],
                "description": data["description"],
                "user": {
                    "username": data["username"],
                    "links": {
                        "html": data["username_url"]
                    },
                },
                "urls": {
                    "small": data["small_url"]
                },
            }
        )

        return SunriseOrSunsetPhoto(
            unsplash_search_result=unsplash_search_result,
            sunrise_or_sunset=data["sunrise_or_sunset"],
        )

    @property
    def does_description_contain_opposite_daytime(self) -> bool:
        opposite_word = "sunrise" if self.sunrise_or_sunset == "sunset" else "sunset"
        return opposite_word in self.description.lower()

    def as_json(self) -> object:
        return {
            "id": self.id,
            "description": self.description,
            "username": self.username,
            "username_url": self.username_url,
            "small_url": self.small_url,
            "sunrise_or_sunset": self.sunrise_or_sunset
        }
    
class SunriseOrSunsetPhotoSet:
    def __init__(self, photos: list[SunriseOrSunsetPhoto]):
        self.photos = photos
        self.unique_photos = self.get_unique_photos(photos)
    
    @staticmethod 
    def from_no_data() -> "SunriseOrSunsetPhotoSet":
        return SunriseOrSunsetPhotoSet(photos=[])

    @staticmethod
    def from_unsplash_search_results(sunrise_images: unsplash_search_results.UnsplashSearchResultSet, sunset_images: unsplash_search_results.UnsplashSearchResultSet):
        photos = []
        photos.extend([SunriseOrSunsetPhoto(result, "sunrise") for result in sunrise_images.results])
        photos.extend([SunriseOrSunsetPhoto(result, "sunset") for result in sunset_images.results])
        return SunriseOrSunsetPhotoSet(photos)

    @staticmethod 
    def from_json(json_string: str) -> "SunriseOrSunsetPhotoSet":
        loaded_json = json.loads(json_string)
        photos = [SunriseOrSunsetPhoto.from_json(photo) for photo in loaded_json["photos"]]
        return SunriseOrSunsetPhotoSet(photos)

    def add_photos(self, photos: list[SunriseOrSunsetPhoto]):
        self.photos.extend(photos)
        self.unique_photos = self.get_unique_photos(self.photos)

    def get_unique_photos(self, photos: list[SunriseOrSunsetPhoto]) -> list[SunriseOrSunsetPhoto]:
        """
        Some results are duplicates (identified by `id`).  This could mean they're
        not definitely a sunrise or sunset, so neither image should be included.
        """
        all_ids: list[str] = list(map(lambda photo: photo.id, photos))
        unique_results = []
        for result in photos:
            is_id_present_once: bool = 1 == len(list(filter(lambda id: id == result.id, all_ids)))
            if is_id_present_once:
                unique_results.append(result)

        return unique_results

    def as_json(self) -> str:
        return json.dumps({
            "photos": list(map(lambda photo: photo.as_json(), self.unique_photos))
        })

    @property
    def photos_sorted_by_id(self) -> list[SunriseOrSunsetPhoto]:
        return sorted(self.unique_photos, key=lambda photo: photo.id)