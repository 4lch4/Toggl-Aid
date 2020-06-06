import { Client_Create, Client_POST_RES } from '../../interfaces/Client';
import { BaseEndpoint } from '../BaseEndpoint';

export class Clients extends BaseEndpoint {
  async createClient(client: Client_Create): Promise<Client_POST_RES> {
    try {
      const res = await this.axios.performRequest('POST', '/clients', {
        data: client
      })

      return res
    } catch (err) { return err }
  }
}
