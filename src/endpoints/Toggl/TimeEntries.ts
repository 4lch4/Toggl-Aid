import { TimeEntry_POST, TimeEntry_POST_RES } from '../../interfaces/TimeEntry'
import { BaseEndpoint } from '../BaseEndpoint'

export class TimeEntries extends BaseEndpoint {
  async createTimeEntry(timeEntry: TimeEntry_POST): Promise<TimeEntry_POST_RES> {
    try {
      const res = await this.axios.performRequest('POST', '/time_entries', {
        data: { time_entry: timeEntry }
      })

      return res.data ? res.data : res.status
    } catch (err) {
      return err
    }
  }
}
