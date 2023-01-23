import json 
import datetime
import utils
import photos



class DailyPhoto:
    def __init__(self, date: datetime.date, photo: photos.SunriseOrSunsetPhoto):
        self.date = date
        self.photo = photo

    def as_dict(self) -> dict:
        return { 
            "date": self.date.strftime("%Y-%m-%d"), 
            "photo": self.photo.as_json()
        }
    
class DailyPhotoSet:
    def __init__(self, start_date: datetime.date = datetime.date(2023, 1, 21)):
        self._date = start_date
        self._photos = []

    def add_photo(self, photo: photos.SunriseOrSunsetPhoto):
        self._photos.append(DailyPhoto(self._date, photo))
        self.photos.sort(key=lambda photo: photo.photo.id)
        self._date += datetime.timedelta(days=1)

    @property
    def photos(self) -> list[DailyPhoto]:
        return list(sorted(self._photos, key=lambda photo: photo.date))
    
    @property
    def current_date(self) -> datetime.date:
        return self._date;

    def as_json(self) -> str:
        return json.dumps({ 
            "photos": [photo.as_dict() for photo in self.photos]
        })


def get_all_photos() -> list[photos.SunriseOrSunsetPhoto]:
    file_names: list[str] = ["data/all_photos-0.json", "data/all_photos-1.json"]
    sunrise_or_sunset_photos = photos.SunriseOrSunsetPhotoSet.from_no_data();
    for file_name in file_names:
        with open(utils.make_relative_file_name(file_name), "r") as infile:
            photo_set = photos.SunriseOrSunsetPhotoSet.from_json(infile.read())
            sunrise_or_sunset_photos.add_photos(photo_set.unique_photos)
    
    return sunrise_or_sunset_photos.photos_sorted_by_id
        

def main(): 
    print("Creating daily photo mapping...")
    all_photos = get_all_photos()
    print("Found {} photos".format(len(all_photos)))

    daily_photos = DailyPhotoSet()

    for photo in all_photos:
        daily_photos.add_photo(photo)

    
    with open(utils.make_relative_file_name('data/daily-photos.json'), 'w') as outfile:
        outfile.write(daily_photos.as_json())

main()
    
