/** The standard model of a Workspace. */
export interface Workspace {
  /** The name of the Workspace. */
  name: string

  /**
   * If it's a pro Workspace or not. Shows if someone is paying for the
   * Workspace or not.
   */
  premium: boolean

  /** Whether currently requesting User has admin access to the Workspace. */
  admin: boolean

  /**
   * The default hourly rate for the Workspace, won't be shown to non-admins if
   * the `only_admins_see_billable_rates` flag is set to true.
   */
  default_hourly_rate: number

  /** The default currency for the Workspace. */
  default_currency: string

  /** Whether only admins may create new projects or everyone. */
  only_admins_may_create_projects: boolean

  /** Whether only the admins can see billable rates or everyone. */
  only_admins_see_billable_rates: boolean

  /**
   * The type of rounding:
   *
   * - Round Down = -1
   * - Nearest = 0
   * - Round Up = 1
   */
  rounding: number

  /** Round up to nearest minute. */
  rounding_minutes: number

  /** Timestamp indicating when the Workspace was last updated. */
  at: Date

  /** URL pointing to the Workspace logo. */
  logo_url?: string
}
