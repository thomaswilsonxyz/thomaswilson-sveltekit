---
title: >-
  Setting environmental variables in a Step in a GitHub Action (with Supabase,
  specifically)
date: 2024-10-12T15:49:13.027Z
slug: 2024-10-12-github-actions-environment-variables
author: Thomas Wilson

---
Recently I thought "maybe it's about time my tests run in CI" for one of my side-projects ([herearethose.photos](https://herearethose.photos), a site for quickly and privately sharing photos).

## The Problem 

Using GitHub actions, it's possible to set job-level environment variables, and step-level environment variables.  But what if you need to set an environment variable *as the result of* a step in a job, and then reference them in a later step?

## The Solution 

Using a temporary file for a workflow, accessible at `GITHUB_ENV` (so `$GITHUB_ENV` in a script)

[See GitHub's related documentation](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions#environment-files)

## Why?

I wanted my Supabase instance to be ephemeral: living only for the duration of the workflow then spun down.  Although some things are knowable before time (like URLs and ports), other things are generated on-the-flow (like authentication credentials).

Storing these kinds of values as environmental variables is what allows the code to execute identically in local development, test, ci, production, and production-like (e.g. `staging`) environments.

## The Code

The following snippet assumes:

- you're writing JavaScript or TypeScript
- you're using pnpm for package management
- you have a directory called `web` which has a `package.json` that has a script called `test:ci` - which runs your tests (mine calls `vitest`)
- your code sources environment variables from the environment (`process.env.VARIABLE_NAME`), as opposed to from a known .env file (like `.env.ci`)

```yaml
name: Unit & Integration Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    env:
      PUBLIC_ENV_NAME: ci

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "20"

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Setup Supabase CLI
        uses: supabase/setup-cli@v1
        with:
          version: latest

      - name: Start Supabase and set environment variables
        run: |
          supabase start
          supabase migration up --local
          echo "PUBLIC_SUPABASE_URL=$(supabase status --output json | jq -r '.API_URL')" >> $GITHUB_ENV
          echo "PUBLIC_SUPABASE_ANON_KEY=$(supabase status --output json | jq -r '.ANON_KEY')" >> $GITHUB_ENV
          echo "SUPABASE_SERVICE_KEY=$(supabase status --output json | jq -r '.SERVICE_ROLE_KEY')" >> $GITHUB_ENV

      - name: Run tests
        env:
          PUBLIC_SUPABASE_URL: ${{ env.PUBLIC_SUPABASE_URL }}
          PUBLIC_SUPABASE_ANON_KEY: ${{ env.PUBLIC_SUPABASE_ANON_KEY }}
          SUPABASE_SERVICE_KEY: ${{ env.SUPABASE_SERVICE_KEY }}
        run: cd web && pnpm test:ci

      - name: Stop Supabase
        if: always()
        run: supabase stop
```