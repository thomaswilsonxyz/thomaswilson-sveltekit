class UnsplashSearchResult: 
    """
    This class represents a single photo from Unsplash.
    """
    def __init__(self, data: dict): 
        self.id = data["id"]
        self._description = data["description"] or "No description"
        self.username = data["user"]["username"]
        self.username_url = data["user"]["links"]["html"]
        self.small_url = data["urls"]["small"]
        self.json = data

    @staticmethod
    def from_json(data: dict) -> "UnsplashSearchResult":
        formatted_data = {
            "id": data["id"],
            "description": data["description"],
            "user": {
                "username": data["username"],
                "links": {
                    "html": data["username_url"],
                },
            },
        }

        return UnsplashSearchResult(data=formatted_data)

    @property 
    def description(self):
        return self._description

    def as_json(self):
        return { 
            "id": self.id, 
            "description": self.description, 
            "username": self.username, 
            "username_url": self.username_url, 
            "small_url": self.small_url
        }


class UnsplashSearchResultSet:
    """
    This class collects a set of UnsplashSearchResults, i.e. a set of photos from Unsplash.
    We use this to filter our duplicate photos, or those which have a description which 
    suggests they are the opposite of the day time we are looking for (e.g. a sunset photo
    with the word "sunrise" in the description).
    """
    def __init__(self, json, sunrise_or_sunset: str):
        self.total = json["total"]
        self.total_pages = json["total_pages"]
        self.json = json
        self.unfiltered_results = [UnsplashSearchResult(photo) for photo in json["results"]]
        self.results = self.filter_out_photos_with_word_in_description("sunrise") if sunrise_or_sunset == "sunrise" else self.filter_out_photos_with_word_in_description("sunset")
        self.sunrise_or_sunset = sunrise_or_sunset
    
    def filter_out_photos_with_word_in_description(self, word: str):
        lower_word = word.lower()
        return [search_result for search_result in self.unfiltered_results if lower_word not in search_result.description.lower()]
    
    def as_json(self): 
        return { 
            "total": self.total, 
            "sunrise_or_sunset": self.sunrise_or_sunset,
            "total_pages": self.total_pages, 
            "results": [result.as_json() for result in self.results]
        }