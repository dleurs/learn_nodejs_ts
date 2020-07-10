FROM node:12

# ARG DOCKER_NODE_ENV="development" # Cam be set in Kubernetes with env
# ENV NODE_ENV=${DOCKER_NODE_ENV}
# ARG DOCKER_PORT=8080
# ENV PORT=${DOCKER_PORT}

WORKDIR /usr/src
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE ${PORT}
CMD [ "npm", "start" ]
