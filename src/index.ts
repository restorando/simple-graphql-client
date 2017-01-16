declare var fetch:any;
declare var Promise:any;

interface GraphQLError {
  message: String
}

interface GraphQLResponse {
  data: Object,
  errors: Array<GraphQLError>
}

export default (url : String, { headers = {} } = {}) => (query : String, variables : Object) => {
  if (typeof fetch !== 'function') {
    throw new Error('fetch is not defined. Perhaps you need a polyfill.')
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=utf-8',
      ...headers
    },
    body: JSON.stringify({ query, variables })
  })
  .then(response => response.json())
  .then(({ data, errors } : GraphQLResponse) => {
    if (errors && errors.length) {
      return Promise.reject(errors[0].message)
    }

    return data
  })
}
