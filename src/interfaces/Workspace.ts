import { User } from './User'

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

  /** Whether ical sync is enabled for the Workspace. */
  ical_enabled: boolean
}

/** The object to send when updating an existing Workspace. */
export interface Workspace_UPDATE {
  default_currency: string
  default_hourly_rate: number
  name: string
  only_admins_may_create_projects: boolean
  only_admins_see_billable_rates: boolean
  rounding: number
  rounding_minutes: number
}

/** The object returned by Toggl after updating a Workspace. */
export interface Workspace_UPDATE_RES {
  id: number
  name: string
  profile: number
  premium: boolean
  admin: boolean
  default_hourly_rate: number
  default_currency: string
  only_admins_may_create_projects: boolean
  only_admins_see_billable_rates: boolean
  only_admins_see_team_dashboard: boolean
  projects_billable_by_default: boolean
  rounding: number
  rounding_minutes: number
  api_token: string
  at: string
  ical_enabled: boolean
}

export interface WorkspaceUser extends User {
  id: number
  default_wid: number
  email: string
  fullname: string
  jquery_timeofday_format: string
  jquery_date_format: string
  timeofday_format: string
  date_format: string
  store_start_and_stop_time: boolean
  beginning_of_week: number
  language: string
  image_url: string
  sidebar_piechart: boolean
  at: Date
  created_at: string
  retention: number
  record_timeline: boolean
  render_timeline: boolean
  timeline_enabled: boolean
  timeline_experiment: boolean
  new_blog_post: any
  should_upgrade: boolean
  achievements_enabled: boolean
  timezone: string
  openid_enabled: boolean
  send_product_emails: boolean
  send_weekly_report: boolean
  send_timer_notifications: boolean
  last_blog_entry: string
  invitation: any
  duration_format: string
}

export interface WorkspaceClient {
  id: number
  wid: number
  name: string
  at: string
}

export interface WorkspaceGroup {
  id: number
  wid: number
  name: string
  at: string
}

export interface WorkspaceProject {
  id: number
  wid: number
  name: string
  billable: boolean
  is_private: boolean
  active: boolean
  template: boolean
  at: string
  created_at: string
  color: string
  auto_estimates: boolean
  hex_color: string
}

export interface WorkspaceTag {
  id: number
  wid: number
  name: string
  at: string
}

export interface WorkspaceTask {
  name: string
  id: number
  wid: number
  pid: number
  uid: number
  active: boolean
  at: string
  estimated_seconds: number
}
