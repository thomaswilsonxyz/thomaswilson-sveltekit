import glob
import frontmatter
import json
from datetime import datetime
from datetime import date
from dateutil.parser import *

"""
Build a hashamp of all blog posts and book reviews used in the blog.
This is used on both the blog/index page, and the blog/[svelte] pages to
render out a list of posts (and fetch more detail) to prevent the need
to re-fetch on every request
"""

blog_posts = glob.glob('./src/content/**/*.md')
hash_map = {}

for file in blog_posts:
    try: 
        post = frontmatter.load(file)
        slug = post['slug']
        frontmatter_keys = post.keys()

        published_date = post['date']

        # We want a datetime, note a date
        if isinstance(published_date, date):
            published_date = datetime.combine(published_date, datetime.min.time())

        details = {
                'title': post['title'],
                'date': published_date.isoformat(),
                'book_review': 'book_review' in frontmatter_keys,
                'preview': post.content[0:180],
                'slug': slug
                }
        hash_map[slug] = details
    except:
        print("!!!")
        print("Caught Error in following file, ignoring")
        print(file)
        print("---")

with open('./src/content/posts.json', "w") as file:
    json.dump(hash_map, file)
