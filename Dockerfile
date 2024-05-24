FROM node:latest

# Install simple HTTP server for serving static content
RUN npm install -g http-server

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files and folders to the current working directory
COPY . .

# Build the React.js app for production with minification
RUN npm run build

# Expose ports for outside access
EXPOSE 8081

# Command to run the application
CMD npm run preview
