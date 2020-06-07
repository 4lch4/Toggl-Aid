/** The standard model for a Group. */
export interface Group {
  /** The name of the group. */
  name: string

  /** The workspace ID for where the group will be used. */
  wid: number

  /**
   * Timestamp that is sent in the response, indicates the time the group was
   * last updated.
   */
  at: Date
}
