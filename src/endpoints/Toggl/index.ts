import { APIConfig } from '../../interfaces/APIConfig'
import { Clients } from './Clients'
import { TimeEntries } from './TimeEntries'
import { Workspaces } from './Workspaces'

export class TogglAPI {
  clients: Clients
  timeEntries: TimeEntries
  workspaces: Workspaces

  constructor(configOpts: APIConfig) {
    this.clients = new Clients(configOpts)
    this.timeEntries = new TimeEntries(configOpts)
    this.workspaces = new Workspaces(configOpts)
  }
}
