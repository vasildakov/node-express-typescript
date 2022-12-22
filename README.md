# Simple app with Node, Express and Typescript

## Installation

Clone the repository

```console
git clone git@github.com:vasildakov/node-express-typescript.git
```

Install node dependencies

```console
npm install
```

Run tests

```console
jest --coverage --verbose --testPathPattern=./tests
```

Run the app

```console
nodemon --watch src src/index.ts
```

Compile the source

```console
tsc
node dist/index.js
```
