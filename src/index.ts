import { ReportsAPI } from './endpoints/Reports'
import { TogglAPI } from './endpoints/Toggl'
import { APIConfig } from './interfaces/APIConfig'

export class TogglAid {
  togglAPI: TogglAPI
  reportsAPI: ReportsAPI

  constructor(configOpts: APIConfig) {
    if (configOpts) {
      this.togglAPI = new TogglAPI(configOpts)
      this.reportsAPI = new ReportsAPI(configOpts)
    } else {
      throw new Error('You must provide the configOpts to use this library.')
    }
  }
}
