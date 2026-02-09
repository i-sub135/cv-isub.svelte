# -----------------------------
# Stage 1: Build SvelteKit
# -----------------------------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package.json & install deps (devDeps termasuk SvelteKit)
COPY package.json package-lock.json ./
RUN npm ci

# Copy semua source code
COPY . .

# Build SvelteKit static
RUN npm run build

# -----------------------------
# Stage 2: Runtime minimal
# -----------------------------
FROM node:20-alpine AS runtime
WORKDIR /app

# Copy hasil build dari stage 1
COPY --from=builder /app/build ./build

# Install production deps (better-sqlite3, etc.)
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --only=production


EXPOSE 3000

# Jalankan SvelteKit server
CMD ["node", "build/index.js"]

