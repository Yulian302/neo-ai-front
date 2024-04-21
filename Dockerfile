FROM node:20-alpine as react_build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .

RUN npm i --silent

COPY . .

RUN npm run build

