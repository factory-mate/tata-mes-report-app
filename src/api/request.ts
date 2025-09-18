interface RequestOptions {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: any
}

interface SuccessRes extends UniApp.RequestSuccessCallbackResult {
  data: R<any>
}

export interface R<T = any> {
  data: T
  success?: boolean
  status?: number
  errmsg?: any
  msg?: any
}

export interface Page<T = any> extends R<PageVo<T>> {}

interface PageVo<T> {
  data: T[]
  dataCount: number
  pageCount: number
  pageIndex: number
  pageSize: number
}

export interface PageDto {
  pageIndex: number
  pageSize: number
  orderByFileds?: string
  conditions?: string
}

export function request<T = any>(options: RequestOptions): Promise<T> {
  return new Promise((resolve, reject) => {
    uni.request({
      url: options.url,
      method: options.method,
      header: {
        Authorization: getAuthorization()
      },
      timeout: 30000,
      data: options.data ?? {},
      success: (res) => {
        const { data } = res as SuccessRes
        switch (data.status) {
          case 401:
            handleUnauthorized()
            break
          case 403:
            handleForbidden()
            break
          default:
            break
        }
        let errorMsg = ''
        if (data.msg) {
          errorMsg = data.msg
        } else if (data.errmsg?.[0]?.Value) {
          try {
            const errormsgParsedJSON = JSON.parse(data.errmsg[0].Value)
            // eslint-disable-next-line no-unsafe-optional-chaining
            errorMsg = errormsgParsedJSON?.[0]?.name + errormsgParsedJSON?.[0]?.msg
          } catch {
            errorMsg = data.errmsg[0].Value
          }
          if (!errorMsg) {
            errorMsg = data.errmsg[0].Value
          }
        }
        if (!data.success || data.status !== 200) {
          uni.showToast({
            icon: 'none',
            title: errorMsg || '失败！'
          })
          reject(data)
        }
        resolve(data as T)
      },
      fail: (error) => {
        uni.hideLoading()
        let content = error.errMsg
        if (
          error.errMsg === 'request:fail timeout' ||
          error.errMsg === 'request:fail abort statusCode:-1 timeout'
        ) {
          content = '请求超时，请检查网络或联系管理员！'
        }
        uni.showModal({
          showCancel: false,
          content
        })
        reject(error)
      }
    })
  })
}

function getAuthorization() {
  return `Bearer ${uni.getStorageSync('token') ?? ''}`
}

function handleUnauthorized() {
  uni.showToast({
    icon: 'error',
    title: '登录失败'
  })
}

function handleForbidden() {
  uni.showToast({
    icon: 'error',
    title: '没有权限'
  })
  setTimeout(() => {
    uni.hideToast()
  }, 1500)
  uni.removeStorageSync('token')
  uni.removeStorageSync('user')
  uni.removeStorageSync('auth')
  uni.navigateTo({
    url: '/pages/home/index'
  })
}
