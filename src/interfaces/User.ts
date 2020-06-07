/** The standard model of a User. */
export interface User {
  api_token: string
  default_wid: number
  email: string
  fullname: string
  jquery_timeofday_format: string
  jquery_date_format: string
  timeofday_format: string
  date_format: string

  /** Whether start & stop time are saved on the Time Entries. */
  store_start_and_stop_time: boolean

  /** 0-6; Sunday = 0 */
  beginning_of_week: number

  /** The User's language. */
  language: string

  /** URL w/ the User's profile picture. */
  image_url: string

  /** Should a pie chart be shown on the sidebar. */
  sidebar_piechart: boolean

  /** Timestamp of the last changes. */
  at: Date

  /** An object w/ Toggl blog post title and link. */
  new_blog_post: any

  /** Whether Toggl can send the User newsletters over e-mail. */
  send_product_emails: boolean

  /** If the User receives a weekly report. */
  send_weekly_report: boolean

  /** Whether to e-mail the User about long-running (8+ hours) timers. */
  send_timer_notifications: boolean

  /** Whether Google sign-in is enabled. */
  openid_enabled: boolean

  /** The timezone set by the User in the My Profile page (IANA TZ Timezones) */
  timezone: string
}
