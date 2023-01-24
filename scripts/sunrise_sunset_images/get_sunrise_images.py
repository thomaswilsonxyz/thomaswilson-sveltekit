import environment_variables
import unsplash_api_gateway
import photos
import utils
import json

def main():
    """Get sunrise and sunset images from Unsplash API."""
    api  = unsplash_api_gateway.UnsplashApi(environment_variables.UNSPLASH_ACCESS_KEY, environment_variables.UNSPLASH_SECRET_KEY)

    sunrise_images = api.search_results_for_query(query="sunrise", page_size=25, page_number=20)
    sunset_images = api.search_results_for_query(query="sunset", page_size=25, page_number=20)

    unfiltered_length = len(sunrise_images.unfiltered_results) + len(sunset_images.unfiltered_results)
    filtered_length = len(sunrise_images.results) + len(sunset_images.results)
    print(f"Found {unfiltered_length} unfiltered images...")
    print(f"Found {filtered_length} filtered images")

    all_photos = photos.SunriseOrSunsetPhotoSet.from_unsplash_search_results(sunrise_images, sunset_images)
    file_name = utils.make_relative_file_name("data/all_photos.json")

    print(f"Found {len(all_photos.photos)} photos")

    file_contents = json.loads(open(file_name, "r").read())
    with open(file_name, "w") as outfile:
        photos_in_file = [photos.SunriseOrSunsetPhoto.from_json(photo) for photo in file_contents["photos"]]
        print(f"Found {len(photos_in_file)} photos in {file_name}...")

        photos_without_opposite_daytime = [photo for photo in photos_in_file if not photo.does_description_contain_opposite_daytime]
        print(f"Found {len(photos_without_opposite_daytime)} photos without opposite daytime...")
        
        all_photos.add_photos(photos_without_opposite_daytime)

        print(f"Writing {len(all_photos.photos)} photos to {file_name}")
        outfile.write(all_photos.as_json())

main()