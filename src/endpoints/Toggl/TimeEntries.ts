import {
  TimeEntry_NEW,
  TimeEntry_NEW_RES,
  TimeEntry_START,
  TimeEntry_START_RES
} from '../../interfaces/TimeEntry'
import { BaseEndpoint } from '../BaseEndpoint'

export class TimeEntries extends BaseEndpoint {
  async createTimeEntry(timeEntry: TimeEntry_NEW): Promise<TimeEntry_NEW_RES> {
    try {
      const res = await this.axios.performRequest('POST', '/time_entries', {
        data: { time_entry: timeEntry }
      })

      return res.data ? res.data : res.status
    } catch (err) {
      return err
    }
  }

  async startTimeEntry(
    timeEntry: TimeEntry_START
  ): Promise<TimeEntry_START_RES> {
    try {
      const res = await this.axios.performRequest(
        'POST',
        '/time_entries/start',
        {
          data: timeEntry
        }
      )

      return res.data ? res.data : res.status
    } catch (err) {
      return err
    }
  }

  async getRunningTimeEntry(): Promise<TimeEntry_GET_RES> {
    try {
      const res = await this.axios.performRequest(
        'GET',
        '/time_entries/current'
      )

      return res.data ? res.data : res.status
    } catch (err) {
      return err
    }
  }
}

export interface TimeEntry_GET_RES {
  id: number
  wid: number
  pid: number
  billable: boolean
  start: string
  duration: number
  description: string
  at: string
}
