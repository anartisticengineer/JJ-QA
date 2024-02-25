FROM node:alpine as base

WORKDIR /app

COPY package*.json ./

RUN rm -fr node_modules && npm ci

COPY . .

CMD [ "npm", "start" ]