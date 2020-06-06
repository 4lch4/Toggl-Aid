import { APIConfig } from '../../interfaces/APIConfig'
import { Clients } from './Clients'
import { TimeEntries } from './TimeEntries'

export class TogglAPI {
  clients: Clients
  timeEntries: TimeEntries

  constructor(configOpts: APIConfig) {
    this.clients = new Clients(configOpts)
    this.timeEntries = new TimeEntries(configOpts)
  }
}
