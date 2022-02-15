import Model from './Model.js';

interface LoginUser {
  login_id: string | number;
  login_password: string;
}

export default class Admin extends Model {
  buildUrl(request: any) {
    const { params } = request;
    return ['admin/admins', ...params];
  }

  static async me(configs = {}) {
    return new this().request({
      method: 'GET',
      url: `admin/auth/me`,
      ...configs,
      isStatic: true,
    });
  }

  static async refreshToken() {
    return new this().request({
      method: 'POST',
      url: `admin/auth/refresh`,
      isStatic: true,
    });
  }

  static async login(loginUser: LoginUser) {
    const data = {
      login_id: loginUser.login_id,
      login_password: loginUser.login_password,
    };
    return new this().request({
      method: 'POST',
      url: `admin/auth/login`,
      data,
      isStatic: true,
    });
  }

  static async logout() {
    return new this().request({
      method: 'GET',
      url: `admin/auth/logout`,
      isStatic: true,
    });
  }
}
