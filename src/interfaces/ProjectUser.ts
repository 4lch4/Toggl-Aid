/** The standard model of a Project User. */
export interface ProjectUser {
  /** The Project ID. */
  pid: number

  /** the User ID who is added to the project. */
  uid: number

  /** The workspace ID where the project belongs. */
  wid?: number

  /** Admin rights for this project (default: false). */
  manager: boolean

  /**
   * Hourly rate for the project user in the currency of the project's client or
   * in the workspace default currency. (Premium Feature)
   */
  rate?: number

  /**
   * Timestamp that is sent in the response, indicates when the project user was
   * last updated.
   */
  at: Date
}
