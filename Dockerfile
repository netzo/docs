# Build Stage 1

FROM node:24-alpine AS build
WORKDIR /app

# Build arguments for environment variables (passed at build time by Sevalla)
# These are needed during nuxt build when nuxt.config.ts is evaluated
# see https://docs.sevalla.com/applications/environment-variables#adding-environment-variables
ARG STUDIO_GITHUB_CLIENT_ID
ARG STUDIO_GITHUB_CLIENT_SECRET

# Set as environment variables for build (so nuxt.config.ts can access them)
ENV STUDIO_GITHUB_CLIENT_ID=${STUDIO_GITHUB_CLIENT_ID}
ENV STUDIO_GITHUB_CLIENT_SECRET=${STUDIO_GITHUB_CLIENT_SECRET}

RUN corepack enable

# Copy package.json and your lockfile, here we add pnpm-lock.yaml for illustration
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm i

# Copy the entire project
COPY . ./

# Build the project
RUN pnpm run build

# Build Stage 2

FROM node:24-alpine
WORKDIR /app

# Only `.output` folder is needed from the build stage
COPY --from=build /app/.output/ ./

# Change the port and host
ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["node", "/app/server/index.mjs"]
