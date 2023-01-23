import requests
import unsplash_search_results

class UnsplashApi:
    def __init__(self, access_key, secret_key):
        """Initialize the Unsplash API wrapper."""
        self.access_key = access_key
        self.secret_key = secret_key

    def search_results_for_query(self, query, page_size=1, page_number=1):
        """Search for photos."""
        response = requests.get(
            "https://api.unsplash.com/search/photos",
            params={
                "query": query,
                "page": page_number,
                "per_page": page_size
            },
            headers={
                "Authorization": f"Client-ID {self.access_key}"
            }
        )

        return unsplash_search_results.UnsplashSearchResultSet(response.json(), query)

