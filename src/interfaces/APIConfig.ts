/**
 * The required settings for interacting with the Toggl API.
 */
export interface APIConfig {
  /** The Username/e-mail or token to use for API authentication. */
  username: string

  /** The Password to use for API authentication. */
  password: string

  /** The base url of the API to use for requests. */
  /**
   * The base URL of the API to use for requests. If none is provided, the
   * default used is https://www.toggl.com/api/v8.
   */
  baseUrl?: string
}
