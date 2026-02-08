FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./

RUN npm i -g pnpm
RUN pnpm ci
COPY . .

RUN pmpm build
RUN pnpm prune --production

FROM node:24-alpine
WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
