export interface Client {
  /** The name of the client (unique in workspace). */
  name: string

  /** Workspace ID, where the client will be used. */
  wid: number

  /** Notes for the client. */
  notes?: string

  /**
   * Timestamp sent in the response, indicates the time client was last updated.
   */
  at: Date
}