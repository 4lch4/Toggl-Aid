/** The standard model of a Time Entry. */
export interface TimeEntry {
  /** The description of the entry, strongly suggested to be used. */
  description?: string

  /** The workspace ID (required if `pid` or `tid` not supplied). */
  wid?: number

  /** Project ID */
  pid?: number

  /** Task ID */
  tid?: number

  /** (Pro Feature) */
  billable?: boolean

  /** Time Entry start time (ISO 8601 Date & Time). */
  start: Date

  /** Time Entry stop time (ISO 8601 Date & Time). */
  stop?: Date

  /**
   * Time Entry duration in seconds. If the Time Entry is currently running, the
   * duration attribute contains a negative value, denoting the start of the
   * Time Entry in seconds since epoch (1970/01/01). The correct duration can be
   * calculated as `current_time + duration` where `current_time` is the current
   * time in seconds since epoch.
   */
  duration: number

  /** The name of your client app. */
  created_with: string

  /** A list of Tag name. */
  tags?: string[]

  /** Should Toggl show the start and stop time of this Time Entry? */
  duronly?: boolean

  /**
   * Timestamp that is sent in the response, indicates the time item was last
   * updated.
   */
  at: Date
}

/** The object to send for creating a new Time Entry. */
export interface TimeEntry_NEW {
  description: string
  tags?: string[]
  duration: number
  start: string
  pid: number
  created_with: string
}

/** The object returned by the API when creating a new Time Entry. */
export interface TimeEntry_NEW_RES {
  data: {
    id: number
    pid: number
    wid: number
    billable: boolean
    start: string
    duration: number
    description: string
    tags: string[]
  }
}

/** The object to send when starting a Time Entry. */
export interface TimeEntry_START {
  description: string
  tags?: string[]
  pid: number
  created_with: string
}

/** The object returned by the API when starting a Time Entry. */
export interface TimeEntry_START_RES {
  data: {
    id: number
    pid: number
    wid: number
    billable: boolean
    start: string
    duration: number
    description: string
    tags: string[]
  }
}

/** The object returned by the API when getting the details of a Time Entry. */
export interface TimeEntry_GET_RES {
  data: {
    id: number
    wid: number
    pid: number
    billable: boolean
    start: string
    duration: number
    description: string
    at: string
  }
}

/** The object returned by the API when stopping a Time Entry. */
export interface TimeEntry_STOP_RES {
  data: {
    id: number
    pid: number
    wid: number
    billable: boolean
    start: string
    duration: number
    description: string
    tags: string[]
  }
}

/** The object to send when updating an existing Time Entry. */
export interface TimeEntry_UPDATE {
  description: string
  tags?: string[]
  duration: number
  start: string
  stop: string
  duronly: boolean
  pid: number
  billable?: boolean
}
