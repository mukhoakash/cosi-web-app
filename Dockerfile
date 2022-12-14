FROM node:16.17.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

COPY . ./

CMD ["npm", "start"]
