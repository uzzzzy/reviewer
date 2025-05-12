# Use official Node image with version 18 (matches your engines requirement)
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies first for better caching
COPY package.json package-lock.json ./
RUN npm install

# Copy all files
COPY . .

# Default command (can be overridden in compose)
CMD ["npm", "run", "review"]