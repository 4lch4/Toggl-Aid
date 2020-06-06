import { AxiosAid } from '@4lch4/axios-aid'
import { APIConfig } from '../interfaces/APIConfig'
import { Defaults } from '../utils/Defaults'

export class BaseEndpoint {
  /** The config options for the API provided to the constructor. */
  configOpts: APIConfig

  /** The AxiosAid client used for performing requests. */
  axios: AxiosAid

  constructor(configOpts: APIConfig) {
    this.configOpts = configOpts
    this.axios = this.buildAxiosClient()
  }

  /**
   * Creates a new AxiosAid instance and stores it as the axios param to be used
   * by any extending classes.
   */
  private buildAxiosClient(): AxiosAid {
    return new AxiosAid(
      this.getBaseURL(),
      Defaults.headers,
      {
        username: this.configOpts.username,
        password: this.configOpts.password
      }
    )
  }

  /**
   * Get the base URL for the API from the configOpts param or from the stored
   * Defaults.
   */
  private getBaseURL(): string {
    return this.configOpts.baseUrl ? this.configOpts.baseUrl : Defaults.baseTogglUrl
  }
}
