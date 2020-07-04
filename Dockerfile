FROM node:14.4.0-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./
COPY package-lock*.json ./

RUN npm i

COPY . .
