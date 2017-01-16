# Simple GraphQL Client
Simple, zero dependencies GraphQL client for the Web and Node.js

## How to install
```
npm install --save simple-graphql-client
```

## Polyfills
Altough `simple-graphql-client` has no dependencies, it need `fetch` and `Promise` functions in the global scope to work.

## Sample usage

### ES5:
```js
var client = require('simple-graphql-client')
var query = client('http://localhost:3000/graphql')
query('query($id: String!) { someEntity(id: $id) { prop } }', { id: 'stuff' })
.then(function (response) {
  console.log(response.someEntity.prop)
})
```

### ES2015:
```js
import client from 'simple-graphql-client'

const query = client('http://localhost:3000/graphql')
query(`
  query($id: String!) {
    someEntity(id: $id) {
      prop
    }
  }
`, { id: 'stuff' })
.then(response => console.log(response.someEntity.prop))
```

### ES7
```js
import client from 'simple-graphql-client'

const query = client('http://localhost:3000/graphql')
const response = await query(`
  query($id: String!) {
    someEntity(id: $id) {
      prop
    }
  }
`, { id: 'stuff' })

console.log(response.someEntity.prop)
```

## Syntax
### `client`
`client(url, [options])`

* `url`: String, required. The URL of the GraphQL server.
* `options`: Object, optional.
  * `headers`: Object, optional. An object with the headers that will be passed to the server.

### `query`
`query(query, variables)`

* `query`: String, required. A valid GraphQL query.
* `variables`: Object, optinal. An object with the variables that will be passed in the query.

## Contributing
If you find an error, create an issue or submit a PR with the fix.
