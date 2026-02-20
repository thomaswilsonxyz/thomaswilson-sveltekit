---
title: >-
  Changelog: Personal photo management with Immich - Coolify, a VPS, and
  S3-compatible storage.
date: 2026-02-20T17:26:06.111Z
slug: 2026-02-20-immich-object-storage-upgrade
author: Thomas Wilson-Cook

---
In my 2026 effort to write more about my personal computing setup, I want to document the switchover from Volume Mount SSD to Object Storage for my personal photo storage.

I have been using [Immich](https://immich.app) as a self-hosted Apple/Google photos alternative for several months now.  I grew concerned that images I took with a device I owned could (quite easily) be taken away from me.

I have long used Immich for photo sharing with my (Android-using) spouse, largely for building a shared album of our cat but also for its great collaborative tools for friends/family ("everyone add all your photos/videos from the holiday here").

I run a lot of my personal software on a Virtual Private Server (a VPS), a small linux "computer" in a data centre somewhere, and [Coolify](https://coolify.io) as my platform.  I'm running a couple of web services and databases from it, and it's working great.  I'm paying ~£15/mo for my server, and the relevant space.  

Over time I've watched my storage use increase.  Especially as a hobbyist and [freelance](https://www.wilsoncookphotography.com) photographer, a couple of gigabytes can fill up pretty fast.

I was previously using an SSD volume mounted to my VPS (because it was the easiest option to expand the storage with my host).  However, as I put more media onto the server, I wanted a way to increase capacity without the (steep) linear price increase.

Over a morning I was able to migrate from a mounted SSD volume on my VPS to an S3 compatible object storage.  The result is cheaper storage (per gb/month), and a pragmatically higher limit.

## 1: Create your Object Storage

Simpleton that I am, I did this through click-ops.  I went to my cloud provider and created a new bucket on their S3-compatible storage.

I created the access credentials so that my VPS could access it. 

If you want to access your Object Storage from elsewhere (like your personal workstation, or through another service) - create another set of credentials for them.  

## 2: Connect through rclone

For simplicity, we want our VPS to treat the storage bucket as if it's just another directory on the file system.  Luckily, there's an open source tool for that: [rclone](https://github.com/rclone/rclone), a CLI for connecting to cloud-storage providers (including S3 compatible storage).  

After installing it (my VPS runs the Ubuntu distro, so `sudo apt install rclone`).  You can set it up with the command line:

```sh
$ rclone config
```

Which will take you through a nice interactive installer.  Or you can just update the config:

```txt
# ~/.config/rclone/rclone.conf
[s3]
type = s3
provider = Other
access_key_id = $ACCESS_KEY
secret_access_key = $SECRET_KEY
endpoint = $REGION_NAME.some-provider.com
acl = private
```

Replace all those `$VARIABLE_NAMES` with your own values.

**Important**: note how your bucket name isn't there?  You'll need to provide your bucket name specifically when running rclone from the terminal.  In the examples below, I'll be using `my-bucket-name`.  This is the (globally unique) name you gave your S3-compatible bucket when you created it in step 1.

As a proof of life, I created a "directory" (S3 doesn't have "real" directories so to speak) in my bucket at `/immich` (more click-ops in my cloud provider's web UI), and then:

```sh
$ rclone lsd s3:my-bucket-name
```

...and expected to see the directory (of size 0) listed out.


## 3: Clone your data

Because I have an in-flight Immich instance, I need to make an exact copy of my immich data within my Object Store bucket:

```sh
$ rclone sync $CURRENT_IMMICH_LOCATION s3:my-bucket-name/immich -p
```

- `-p` is the Progress flag, shows what's uploading and how far through you are.  I had several GB of data, so it was useful for knowing it hadn't got stuck.

## 4: Mount your volume

I wanted to create a clean mount to the `/immich` directory in the root of my bucket.  I'm trying to put these commands in my `/usr/local/bin` directory, instead of just hitting `UP` enough times in my terminal until I find the right thing.

Here's a script for mounting:

```sh
# /usr/local/bin/mount-s3-immich
rclone mount hetzner:my-bucket-name/immich /mnt/s3-immich \
  --allow-other \
  --vfs-cache-mode writes \
  --daemon	
```

* `--allow-other`: Allows other users on the VPS to access the mount (like our containerised Immich service).
* `--vfs-cache-mode` Immich's write patterns may not be atomic, and this creates a buffer for those writes before they're uploaded.
* `--daemon` runs the process as a daemon (in the background).  If you're a tmux wiz, you can use that but I'm not.

You'll need to make sure that `user_allow_other` is enabled in your `/etc/fuse.conf`.  Because this will be a Fuse mount, the `--allow-other` flag for rclone needs to be cleared by the filesystem itself.

And then for unmounting:

```sh
# /usr/local/bin/unmount-s3-immich
fusermount -u /mnt/s3-immich
```

## 5: Update your Immich docker-compose

Over to your Coolify dashboard now (I'm assuming you have an Immich service running there).

You need to update the Volume on your Docker Compose to use your new mount as the source of data.  That means mapping that new mounted volume to `/usr/src/app/upload`:

```yaml
# Immich Service Dockerfile (e.g. in Coolify)
services:
	immich:
		image: 'ghcr.io/immich-app/immich-server:${IMMICH_VERSION:-release}'
	volumes:
		- '/mnt/s3-immich:/usr/src/app/upload'
	#...rest of docker-compose.yaml
	
```

## 6: 🎉

Y'all good!  You're now storing photos at a _very_ cheap £/GB _and_ you have a little more ownership.