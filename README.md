# REST API Node, Typescript, Express and SQLite

## Project

```bash
mkdir app-express
cd app-express
yarn init --yes
```

## Typescript config

```bash
tsc --init
```

- Base **tsconfig.json** config.

```json
{
    "compilerOptions": {
    "target": "es6",   
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
    }
}
```
- package.json scripts config


```json

"scripts": {
    "dev": "ts-node ./src/index.ts",
    "build": "tsc",
    "start": "node ./dist/index.js"
},
```

- To finalize the Typescript configuration, the types modules for Node and the ts-node module must be installed using the following command in the terminal:
  

```json
"main": "./src/index.ts"
```

## Express and cors modules

```bash
yarn add express @types/express
yarn add cors@types/cors
```

## Server script

```ts
import express from 'express'
import cors from 'cors'

// PORT
const PORT = process.env.PORT || 4000

// HOST
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App Express
const app = express()

// Endpoint
app.get('/', (req, res) => {
	res.send('Hello World!')
})

// Cors
app.use(cors({
	origin: ['http://localhost:3000']
}))


app.use((req, res) => {
	res.status(404)
})


app.listen(PORT, () => {
	console.log(`Server is running on ${HOSTNAME}:${PORT}`)
})
```

- Run server 

```bash
yarn dev
```