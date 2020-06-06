/** The standard model for a Client object. */
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

/**
 * The response from the Toggle API after successfully creating a new Client.
 */
export interface Client_POST_RES {
  id: number;
  wid: number;
  name: string;
  at: Date;
}

/** The object to be sent to the API when creating a new Client. */
export interface Client_Create {
  name: string
  wid: number
  notes?: string
  timestamp: Date
}