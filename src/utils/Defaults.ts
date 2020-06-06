const APIUrls = {
  TogglAPI: 'https://www.toggl.com/api/v8',
  ReportsAPI: 'https://www.toggl.com/reports/api/v2'
}

/**
 * The default values to be used for interacting with the Toggl API. At the time
 * of creation, the two defaults stored are the baseUrl for the API, and the
 * headers to be sent along w/ each request.
 */
const Defaults = {
  reportsAPI: {
    baseUrl: APIUrls.ReportsAPI,
    weeklyReportUrl: `${APIUrls.ReportsAPI}/weekly`,
    detailsReportUrl: `${APIUrls.ReportsAPI}/details`,
    summaryReportUrl: `${APIUrls.ReportsAPI}/summary`
  },
  baseTogglUrl: APIUrls.TogglAPI,
  headers: { 'Content-Type': 'application/json' }
}

export { Defaults }

