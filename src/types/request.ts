export interface Response {
  code?: number | string
  message?: string
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
