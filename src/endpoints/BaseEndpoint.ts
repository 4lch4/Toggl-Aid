import { AxiosAid } from '@4lch4/axios-aid'
import { APIConfig } from '../interfaces/APIConfig'

export class BaseEndpoint {
  axios: AxiosAid

  constructor(configOpts: APIConfig) {
    this.axios = new AxiosAid(
      configOpts.baseUrl,
      { 'Content-Type': 'application/json' },
      {
        username: configOpts.username,
        password: configOpts.password,
      }
    )
  }
}
