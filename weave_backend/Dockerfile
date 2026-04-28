# Use the official Node.js 20 image (slim for smaller size)
FROM node:20-slim

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy dependency manifests first (for Docker layer caching)
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy application source code
COPY . .

# Create uploads directory
RUN mkdir -p uploads

# Cloud Run injects PORT env var automatically
ENV PORT=8080
EXPOSE 8080

# Run the server
CMD ["node", "server.js"]
