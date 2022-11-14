FROM node:18-alpine

RUN npm i -g @nestjs/cli@9.1.5

USER node

WORKDIR /home/node/manga-app
