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
