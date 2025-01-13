# Node.js base layer with dependencies installed
FROM node:16-alpine as node-base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Development build stage (base for prod)
FROM node-base as development
WORKDIR /app
COPY . .
RUN npm run build
EXPOSE 8000

# Production build stage - separate stage for security isolation (NodeJS/npm not needed for prod)
FROM development as production-build
RUN npm prune --production

# Final production stage
FROM node:16-alpine as final
WORKDIR /app
COPY --from=production-build /app /app
EXPOSE 8000
CMD ["npm", "start"]
#trigger deployment
