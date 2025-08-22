export interface Response {
  success?: boolean
}

export interface BaseResponse<T = any> extends Response {
  data: T
}

export interface PageResponse<T = any> extends Response {
  data: T
  pageCount: number
  pageSize: number
  total: number
}
