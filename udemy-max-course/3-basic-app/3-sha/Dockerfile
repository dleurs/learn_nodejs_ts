FROM node:12

WORKDIR /usr/src
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE ${DOCKER_PORT}
CMD [ "npm", "start" ]
