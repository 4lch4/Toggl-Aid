import { BaseEndpoint } from '../BaseEndpoint'

export class Projects extends BaseEndpoint {
  async createProject(project: Project_NEW) {
    try {
      const res = await this.axios.performRequest('POST', '/projects', {
        data: { project: project }
      })

      return this.respond(res)
    } catch (err) {
      return err
    }
  }

  async getProjectDetails(projectId: number): Promise<Project_GET_RES> {
    try {
      const res = await this.axios.performRequest(
        'GET',
        `/projects/${projectId}`
      )

      return this.respond(res)
    } catch (err) {
      return err
    }
  }
}
