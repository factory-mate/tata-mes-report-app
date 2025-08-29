import type { LoginDto, LoginVo } from './types'

export const AuthAPI = {
  login: (data: LoginDto) =>
    request<R<LoginVo>>({
      url: `${GlobalEnvConfig.MANAGE_CENTER_API_PREFIX}/api/Login/LoginIn`,
      method: 'POST',
      data: {
        ...data,
        cSourceAppType: '004'
      } as LoginDto
    })
}
