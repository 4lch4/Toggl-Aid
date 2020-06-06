import { APIConfig } from '../../interfaces/APIConfig'
import { Clients } from './Clients'

export class TogglAPI {
  clients: Clients

  constructor(configOpts: APIConfig) {
    this.clients = new Clients(configOpts)
  }
}
