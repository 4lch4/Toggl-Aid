import { APIConfig } from '../../interfaces/APIConfig'
import { Details } from './Details'
import { Summary } from './Summary'
import { Weekly } from './Weekly'

export class ReportsAPI {
  weekly: Weekly
  details: Details
  summary: Summary

  constructor(configOpts: APIConfig) {
    if (configOpts) {
      this.weekly = new Weekly(configOpts)
      this.details = new Details(configOpts)
      this.summary = new Summary(configOpts)
    } else {
      throw new Error(
        'You must provide the configOpts parameter to use this library.'
      )
    }
  }
}
