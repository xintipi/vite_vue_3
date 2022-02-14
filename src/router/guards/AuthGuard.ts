import { useAuthStore } from '@/store/auth'
import isEmpty from 'lodash-es/isEmpty'
import Admin from '@/models/Admin'
import { PERMISSIONS } from '@/enums/permissions.enum'

export const auth = useAuthStore()

export const AuthGuard = async (to: any, from: any, next: any) => {
  if (!auth.hasToken) {
    next({ name: 'login' })
    return
  }

  if (auth.authProfile) {
    PermissionGuard(to, from, next)
    return
  }

  try {
    if (!auth.authProfile) {
      const resp = await Admin.refreshToken()
      const { token } = resp.data
      auth.setToken({ token })

      await SetProfile(to, from, next)

      PermissionGuard(to, from, next)
    }
  } catch (e) {
    auth.setLogout()
    next({ name: 'login' })
    throw e
  }
}

export const SetProfile = async (to: any, from: any, next: any) => {
  const { data } = await Admin.me({
    query: {
      include: 'role,permissions'
    }
  })

  if (isEmpty(data)) {
    next({ name: 'login' })
    return
  }

  auth.setProfile({ profile: data })
  auth.setPermission(data.permissions)
}

export const PermissionGuard = (to: any, from: any, next: any) => {
  if (to.meta.permissions === PERMISSIONS.ALL) {
    next()
  } else {
    const permissions = auth.currentPermissions
    const permissionList = to.meta.permissions
    if (permissionList && permissions.find((permission: any) => permissionList.includes(permission.name))) {
      next()
    } else {
      next({ name: 'error.403' })
    }
  }
}
