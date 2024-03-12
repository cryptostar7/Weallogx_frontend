FROM node:14.21.3

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# RUN npm install
# RUN npm install http-server


# # Copy all files from the current directory to the working directory
# COPY . .

# # Build the Vue.js app
# # RUN npm run build
# # Install dependencies
# RUN npm run build

# # Install @popperjs/core
# RUN npm install @popperjs/core
# # RUN npx vite build

# # Expose port 5173 to allow outside access to your app
# EXPOSE 5173

# # Command to run the application
# # CMD ["npm", "run","build"]

# CMD [ "http-server", "dist" ]



# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]



### docker build -t vuejs-cookbook/dockerize-vuejs-app .
### docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
