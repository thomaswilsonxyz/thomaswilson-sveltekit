# Use a Node.js Alpine image for the builder stage
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml ./

ENV CI=true
RUN npm i -g pnpm
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
RUN pnpm prune --prod

# Use another Node.js Alpine image for the final stage
FROM node:24-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
