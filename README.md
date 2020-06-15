# Setup NodeJS / TypeScript with nodemon auto-reload and VSCode debugging (breakpoints)


## Fast way :
```bash
tar xzvf basic-node-ts.tar
code basic-node-ts;
npm install;
npm run dev;
#VSCode > Debug > Play (top left) 
```

## Manual way :
https://dev.to/oieduardorabelo/nodejs-with-typescript-debug-inside-vscode-and-nodemon-23o7
```bash
npm --version #6.14.4
node --version #v12.16.3
tsc --version #Version 3.9.5
code --version # Visual Code Studio 1.46.0
```

```bash
npm init # entry point : ./src/main.ts
```
```bash
npm add express typescript @types/express @types/node
npm add --save-dev nodemon ts-node 
```

```bash
vim nodemon.json
```

```bash
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/**/node_modules"],
  "verbose": true,
  "execMap": { 
    "ts": "node --require ts-node/register"
  },
  "watch": ["src/"],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json,ts"
}
```

```bash
vim tsconfig.json
```

```bash
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "outDir": "./build",
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "esModuleInterop": true
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.test.ts"
    ]
}
```

<strong>open package.json and replace script</strong>

```bash
    "scripts": {
        "build": "tsc",
        "prestart": "npm run build",
        "start": "node ./build/main.js",
        "dev": "nodemon src/main.ts",
        "dev:debug": "nodemon --inspect src/main.ts"
    },
```
```bash
mkdir src; cd src; vim main.ts;
```
```bash
import express from 'express';

const app: express.Application = express();

app.get('/', function (req, res)
{
  console.log("URL : ", req.url, "\nMETHOD : ", req.method, "\nHEADERS : ", req.headers);
  res.send('<h1>Hello World!</h1>');
});

const hostname: string = '0.0.0.0';
const port: number = 8080;
app.listen(port, hostname, function ()
{
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
```bash
cd ..;mkdir .vscode; cd .vscode; vim launch.json;
```
```bash
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Node: Nodemon",
      "processId": "${command:PickProcess}",
      "restart": true,
      "protocol": "inspector"
    }
  ]
}
```

```bash
npm run dev:debug
#Then, in VSCode, debug, run --> Top right corner
#Then pick node --require ts-node
```

You can now but breakpoint, and save your main.ts file (it will auto-reload)

[Not tested] With Chrome :
```bash
chrome://inspect
```

## Dockerfile

```bash
vim Dockerfile
```
```bash
FROM node:12

ARG DOCKER_NODE_ENV="development"
ENV NODE_ENV=${DOCKER_NODE_ENV}

ARG DOCKER_HOST_ADDR="0.0.0.0"
ENV HOST_ADDR=${DOCKER_HOST}

ARG DOCKER_PORT=8080
ENV PORT=${DOCKER_PORT}

WORKDIR /usr/src
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE ${DOCKER_PORT}
CMD [ "npm", "start" ]
```
```bash
vim .dockerignore
```
```bash
node_modules
npm-debug.log
nodemon.json
```
```bash
vim .gitignore
```
```bash
/node_modules/
/build/
```
```bash
docker build --build-arg DOCKER_NODE_ENV=production -t dleurs/node-web-app:1.0.0 .
# You can also set DOCKER_HOST_ADDR and DOCKER_PORT
```
```bash
docker run -p 49160:8080 -d dleurs/node-web-app:1.0.0
```
```bash
# Get container ID
docker ps
# Print app output
docker logs <container id>
# Enter the container
docker exec -it <container id> /bin/bash
# Curl
curl -i 0.0.0.0:49160
```
```bash
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 27
ETag: W/"1b-THCm5fDlMzBGlekSbMZKcFoPKZY"
Date: Thu, 11 Jun 2020 17:15:13 GMT
Connection: keep-alive
<h1>Hello World!</h1>%  
```

