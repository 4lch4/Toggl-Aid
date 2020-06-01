/**
 * The required settings for interacting with the Toggl API system.
 */
export interface APIConfig {
  /** The Username/e-mail or token to use for API authentication. */
  username: string

  /** The Password to use for API authentication. */
  password: string

  /** The base url of the API to use for requests. */
  baseUrl: string
}
