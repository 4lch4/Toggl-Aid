/** The standard model of a Task. */
export interface Task {
  /** The name of the task. */
  name: string

  /** The Project ID for the task. */
  pid: number

  /**
   * The workspace where the task will be saved (project's workspace id is used
   * when not supplied).
   */
  wid?: number

  /** The user ID to whom the task is assigned to. */
  uid?: number

  /** Estimated duration of task in seconds. */
  estimated_seconds?: number

  /** Whether the task is done or not. */
  active: boolean

  /**
   * Timestamp that is sent in the response for PUT, indicates the time task was
   * last updated.
   */
  at: Date

  /** Total time tracked (in seconds) for the Task. */
  tracked_seconds: number
}
