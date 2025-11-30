# ------------ Build Stage ------------
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source code
COPY . .

# ------------ Runtime Stage ------------
FROM node:18-alpine
WORKDIR /app

# Copy app from builder
COPY --from=builder /app ./

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
