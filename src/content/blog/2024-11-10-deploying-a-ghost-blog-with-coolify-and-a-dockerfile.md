---
title: Deploying a Ghost blog with Coolify and a Dockerfile
date: 2024-11-10T11:35:36.069Z
slug: 2024-11-10-deploying-a-ghost-blog-with-coolify-and-a-dockerfile
author: Thomas Wilson

---
I think I might like a place to publish content (photos, some longer-form writing) that doesn't feel like it belongs on my personal, tech-centric blog.  

I chose [Ghost](https://ghost.org/), an open-source platform for publishers or content-creators.  The first ever blog that I spun up during my postgrad studies was a Ghost blog, and for a variety of reasons it felt better than using WordPress or Substack . 

I chose [Coolify](https://coolify.io/) as a host-your-own Platform-as-a-service (PaaS) that would let me deploy multiple containerised applications to a server that I owned (or rented). 

Ghost offer a paid plan that starts at $9/mo, but its core technology is open-source, so I wanted to self-host.  

## Spin up a server

I spun up a Virtual Private Server (VPS) on Hetzner, I took their CX32 model: €7.56/mo gets me 4vCPUs, 8GB memory, and 80GB disk space along with daily backups.

After the server has spun up, I SSH'd in (using the keys that are generated during the creation process), and followed Coolify's [own self-hosted instructions](https://coolify.io/docs/installation), which took no more than a couple of minutes.

Now when I go to my VPS's IP address, I see the Coolify UI.  Cool !

## Decide on your domain name

If you want your blog deployed to a domain (e.g. thomaswilson.xyz) or a subdomain (e.g. ghost.thomaswilson.xyz) then you should decide this up top.  In all the examples below, I have used ghost.thomaswilson.xyz.

You will need to replace that with whatever you decide to use.

## Create the Coolify Resource

Within a Project in Coolify, create a new Resource, and Select "Dockerfile"

## Specify the Dockerfile

```Dockerfile
FROM ghost:alpine

ENV NODE_ENV=production \
    url=https://ghost.thomaswilson.xyz \
    database__client=sqlite3 \
    database__connection__filename=/var/lib/ghost/content/data/ghost.db \
    paths__contentPath=/var/lib/ghost/content


# Create a directory for Ghost content
RUN mkdir -p /var/lib/ghost/content && \
    chown -R node:node /var/lib/ghost/content

USER node

VOLUME ["/var/lib/ghost/content"]

EXPOSE 2368

CMD ["node", "current/index.js"]
```

## Expose the Network port

By default (and specified in the above Dockerfile), Ghost will run on port 2368.  I don't see a need to change that.

In the Network tab of the Resource's Configuration, specify `2368` under the "Ports Exposes" field.

## Specify volumes

In Configurations > Storages, mount a new volume where the directory on the host is `/data/ghost/content`, and the path on the container is `/var/lib/ghost/content` (the directory specified in the container above).

This will mean that your content (managed in a SQLite database, specified in the Dockerfile) will persist between deploys, so you won't lose all of your content just because you re-deploy your resource.  

It should also allow you to export the directory content from your VPS, should you wish to jump ship to another server.

## Set Domain Name Records

This might take a couple hours to filter through the pipes of the internet. 

In your domain registrar, create an `A` record that points your desired (sub)domain towards the static IP of your VPS.

In my instance, I pointed `ghost` towards the IP, so that `https://ghost.thomaswilon.xyz` would point towards my .

Within the Configurations page of your Ghost blog Resource on Coolify, set the Domains field to that same URL, so for me: `https://ghost.thomaswilson.xyz`

## (Re-)Deploy that Resource

Now that you've set up your resources, and domain names, you'll be able to deploy that resource !

## Wait

It might take a minute for the domain name to filter through - I've used Hover and Netlify (which normally take a few hours), and Cloudflare, which has always been notably faster.