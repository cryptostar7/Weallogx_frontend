FROM node

WORKDIR /app

COPY . /app
COPY docker/env_front /app/.env

RUN npm ci

EXPOSE 8000

CMD npm run env -- vite --host 0.0.0.0 --port 8000
