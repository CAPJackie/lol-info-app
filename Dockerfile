# syntax=docker/dockerfile:1
FROM node:20-alpine AS deps
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies first for better layer caching
COPY package.json yarn.lock* ./
RUN corepack enable && yarn install --frozen-lockfile

FROM deps AS verify
WORKDIR /app
COPY . .
# Runs your existing verify pipeline:
# format:check -> lint -> build -> perf:routes
RUN yarn build:verify

FROM deps AS build
WORKDIR /app
COPY . .
RUN yarn build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=build /app/package.json /app/yarn.lock* ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["yarn", "start"]