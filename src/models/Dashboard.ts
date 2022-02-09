import Model from './Model.js'

export default class Dashboard extends Model {
  buildUrl(request: any) {
    const { params } = request
    return ['admin/dashboard', ...params]
  }
}
