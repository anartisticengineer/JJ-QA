FROM node:alpine as base

WORKDIR /app

COPY package*.json ./

RUN rm -fr node_modules && npm install

COPY . .

# How to run the actual app
CMD [ "npm", "start" ]