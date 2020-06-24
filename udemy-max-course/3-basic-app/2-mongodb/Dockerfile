# docker build --build-arg DOCKER_DBURL="mongodb+srv://dimitri:<setPassword>@testcluster-vbfgl.gcp.mongodb.net/<setDbName>?retryWrites=true&w=majority"  -t dleurs/nodejs-todo-app-crud:1.0.0 .
# docker run -p 49160:8080 -d dleurs/nodejs-todo-app-crud:1.0.0
FROM node:12

# ARG DOCKER_NODE_ENV="production"
# ENV NODE_ENV=${DOCKER_NODE_ENV}

# ARG DOCKER_HOST_ADDR="0.0.0.0"
# ENV HOST_ADDR=${DOCKER_HOST}

# ARG DOCKER_PORT=8080
# ENV PORT=${DOCKER_PORT}

# ARG DOCKER_DBURL
# ENV DBURL=${DOCKER_DBURL}

WORKDIR /usr/src
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE ${DOCKER_PORT}
CMD [ "npm", "start" ]
