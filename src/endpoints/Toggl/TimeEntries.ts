import {
  TimeEntry_GET_RES,
  TimeEntry_NEW,
  TimeEntry_NEW_RES,
  TimeEntry_START,
  TimeEntry_START_RES,
  TimeEntry_UPDATE
} from '../../interfaces/TimeEntry'
import { BaseEndpoint } from '../BaseEndpoint'

export class TimeEntries extends BaseEndpoint {
  /**
   * Creates a new Time Entry for a set time duration. To simply begin a timer,
   * use the startTimeEntry function.
   *
   * TODO: Validate this function.
   *
   * @param timeEntry The object containing the Time Entry properties.
   */
  async createTimeEntry(timeEntry: TimeEntry_NEW): Promise<TimeEntry_NEW_RES> {
    try {
      const res = await this.axios.performRequest('POST', '/time_entries', {
        data: { time_entry: timeEntry }
      })

      return this.respond(res)
    } catch (err) {
      return err
    }
  }

  /**
   * Starts a new timer/Time Entry to be stopped at a later point.
   *
   * @param timeEntry The object containing the Time Entry properties.
   */
  async startTimeEntry(
    timeEntry: TimeEntry_START
  ): Promise<TimeEntry_START_RES> {
    try {
      const res = await this.axios.performRequest(
        'POST',
        '/time_entries/start',
        { data: timeEntry }
      )

      return this.respond(res)
    } catch (err) {
      return err
    }
  }

  async stopTimeEntry(timeEntryId: number) {
    try {
      const res = await this.axios.performRequest(
        'PUT',
        `/time_entries/${timeEntryId}/stop`
      )

      return this.respond(res)
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

      return this.respond(res)
    } catch (err) {
      return err
    }
  }

  /**
   * Updates an existing Time Entry with the given ID using the given properties
   * and returns the result.
   *
   * @param timeEntryId The ID of the Time Entry to update.
   * @param timeEntry The object containing the new properties.
   */
  async updateTimeEntry(timeEntryId: number, timeEntry: TimeEntry_UPDATE) {
    try {
      const res = await this.axios.performRequest(
        'PUT',
        `/time_entries/${timeEntryId}`,
        { data: { time_entry: timeEntry } }
      )

      return this.respond(res)
    } catch (err) {
      return err
    }
  }

  async deleteTimeEntry(timeEntryId: number) {
    try {
      const res = await this.axios.performRequest(
        'DELETE',
        `/time_entries/${timeEntryId}`
      )

      return this.respond(res)
    } catch (err) {
      return err
    }
  }
}
