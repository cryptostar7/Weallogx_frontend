FROM node:14.21.3

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install @popperjs/core
RUN npm install @popperjs/core

# Copy all files from the current directory to the working directory
COPY . .

# Build the Vue.js app
RUN npm run build

# Expose port 5173 to allow outside access to your app
EXPOSE 5173

# Command to run the application
CMD ["npm", "run","dev"]
