import requests
import json

class Cats:
    def __init__(self):
        self.base_url = "https://catfact.ninja/breeds"

    def get_nth_breed(self, n):
        response = requests.get(self.base_url)

        if response.status_code == 200:
            breeds = response.json()
            if 0 <= n <len(breeds['data']):
                return breeds['data'][n]['breed']
            
            else:
                "Invalid value n"

        else:
            "Failed to retrieve data"

# Test case
cat = Cats()
breed = cat.get_nth_breed(1)
print(breed)