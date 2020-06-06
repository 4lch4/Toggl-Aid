/**
 * The default values to be used for interacting with the Toggl API. At the time
 * of creation, the two defaults stored are the baseUrl for the API, and the
 * headers to be sent along w/ each request.
 */
const Defaults = {
  baseUrl: 'https://www.toggl.com/api/v8',
  headers: { 'Content-Type': 'application/json' }
}

export { Defaults }

