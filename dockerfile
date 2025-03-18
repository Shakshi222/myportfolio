# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json first (ignore yarn.lock if not using Yarn)
COPY package.json ./
COPY yarn.lock ./ 

# Install dependencies
RUN yarn install --frozen-lockfile || npm install

# Copy the rest of the application
COPY . .

# Expose port 3000 for development
EXPOSE 3000

# Default command to start the application
CMD ["yarn", "start"]
