# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "npm", "start" ]

# docker build . -t "priviet-nodejs:1.0.0" 
# docker images | grep node
# docker save 4c72bfc3a4e -o priviet-nodejs.tar priviet-nodejs:1.0.0
# scp -i /Users/dimitrileurs/.paasrc/minidouze/minidouze.pem priviet-nodejs.tar cloud-user@139.54.131.69:/tmp
# docker load -i priviet-nodejs.tar
# docker tag priviet-nodejs:1.0.0 bcmt-registry:5000/priviet-nodejs:1.0.0
# docker push bcmt-registry:5000/priviet-nodejs:1.0.0