---
title: >-
  Deploying a Static website with Svelte-Kit, Docker, and Coolify.  Or:
  Coolify is a neat platform.
date: 2024-11-22T14:21:13.409Z
slug: >-
  2024-11-22-deploying-a-static-website-with-svelte-kit-docker-and-coolify-or-coolify-is-a-neat-platform
author: Thomas Wilson

---
Tl;dr: Dockerfile is at the bottom of this blog post.

I wrote last week about using Coolify to deploy a Ghost blog platform with *just* a Dockerfile (like, text pasted into a `textarea` on a web interface).  That's *really* cool - and (to me) the power fantasy of OSS, without the tedium.  

I used to write up lists of my favourite albums of each year.  They used to be endpoints on my websites (like `https://www.thomaswilson.xyz/albums/2019`).  I used to do a lot of art-direction on these pages, so they used to be on special URLs, not good old markdown. 

I wanted to do another one of those pages this year.  Why?  Because music is joyful and hopeful, and sometimes it's easy to forget about joy and hope.  Also, like, how do you actually discover new music as an adult?  

The answer: you and your friends all make custom web pages that you deploy on subdomains, and host for cheap on your own VPS.

The problem is that barely six years since I had a custom-built website, I've re-written the whole thing maybe three times (I think it was in Vue for a minute there, pretty off-meta for 2024 Wilson).  Anyway those lists have gone, RIP.  

And I don't want to make another list this year, sort of knowing it'll be gone in five years.

Enter, subdomains.  Instead of having `https://www.thomaswilxon.xyz/albums/2019`, I can have `https://albums2019.thomaswilson.xyz`.  Because of the pipes of the internet, this will just route the request to somewhere entirely different from my main site (which you might be on right now!).

And now I've got a little server with Coolify running, this whole infrastructure built to let me deploy cool little sites like this.  I imagine it could do complex things too, but because my web framework *du jour* is SvelteKit - it's going to get spit out as just a bunch of HTML, CSS, and JS files.

Cool ! Web servers know exactly what to do with this. 

The code's below, but it was so, so easy to use Coolify to set this up.  It took ~30 minutes, with Friday afternoon brain, and on patchy café wifi.  This is my second-ever self-hosted PaaS deployment, and I couldn't be happier !

## Show me the code

Yep, of course.

Install the static adapter (so Svelte knows to build the site as generated, static HTML, CSS, and JS files):

```
$ pnpm add @sveltejs/adapter-static
```

I then followed the two steps on the [official documentation](https://svelte.dev/docs/kit/adapter-static).  At the root of my app, I let Svelte know that pre-rendering is cool:

```
// src/routes/+layout.ts
export const prerender = true;
```

And then I told Svelte to build the app using the static adapter

```js
// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
	// .. some other stuff
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
	
export default config;
```

I spun up the following Dockerfile in the root of the repo:

```Dockerfile
# Use the official Node.js image as the base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and package-lock.json
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the SvelteKit app
RUN pnpm build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

Using the Coolify UI I spun up a new resource, pointing at my (public) GitHub repo, and specified to build from a Dockerfile.  Because that Dockerfile is now present, and running the `build` script which is pointing towards the `adapter-static`.
