# HelloWorld NodeJS TypeScript Express

```bash
npm init
npm install typescript -s
```

In package.json :
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "prestart": "npm run build",
    "start": "node ./build/app.js",
    "dev": "nodemon --watch ./src/*.ts --exec 'tsc && node ./build/app.js'"
  },
```
```bash
npm run build -- --init
npm install express -s
npm install @types/express -s
sudo npm install nodemon -g
```
In tsconfig.json, uncomment the outDir :
```bash 
"target": "es6",  
"sourceMap": true,
"outDir": "./build",  
```

```bash 
mkdir src;cd src; vim app.ts

import express from 'express';

const app: express.Application = express();

app.get('/', function (req, res)
{
  console.log(req);
  res.send('<h1>Hello World!</h1>');
});

const hostname: string = '127.0.0.1';
const port: number = 8000;
app.listen(port, hostname, function ()
{
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
```bash 
npm run dev
#npm run dev-ts-node 
#npm start
```

## For using debugger :

mkdir .vscode; cd .vscode; vim launch.json;
```bash
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Build Project",
            "program": "${workspaceFolder}/src/app.ts",
            "preLaunchTask": "npm: build",
            "sourceMaps": true,
            "smartStep": true,
            "internalConsoleOptions": "openOnSessionStart",
            "outFiles": [
                "${workspaceFolder}/build/**/*.js"
            ]
        }
    ]
}
```


Other setup 

npm init
npm install --save-dev @types/node
tsc --init
npm install --save express
npm install --save-dev @types/express
npm install --save-dev body-parser
npm install --save-dev @types/body-parser


in tsconfig :

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./build",
    "sourceMap": true,
    "esModuleInterop": true
  }
}


in package.json
    "build": "tsc",
    "prestart": "npm run build",
    "start": "node ./build/app.js",
"dev": "nodemon --watch ./src/*.ts --exec 'tsc && node ./build/app.js'"
