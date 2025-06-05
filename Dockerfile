# Stage 1: Build the Next.js app
FROM node:20-bullseye-slim as build
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=2000"
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build  # Builds the Next.js app
# Stage 2: Create a lightweight production image
FROM node:20-bullseye-slim
WORKDIR /app
# Copy the standalone build and necessary dependencies
COPY --from=build /app/.next/standalone .
COPY --from=build /app/public ./public
COPY --from=build /app/.next/static ./.next/static
# Install only production dependencies
RUN npm install --omit=dev
EXPOSE 3000
CMD ["node", "server.js"]  