export interface LoginDto {
  cLoginName: string
  cPassWord: string
  cSourceAppType?: string
}

export interface LoginVo {
  token: string
  token_user: TokenUser
  expires_in: number
  token_type: string
}

export interface TokenUser {
  UserId: string
  UserCode: string
  UserName: string
  UserStatus: string
  UserIoc: string
  Parm01: string
  Parm02: string
  Parm03: string
}
