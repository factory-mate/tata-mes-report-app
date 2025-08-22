export const GlobalEnvConfig = Object.freeze({
  PORT: import.meta.env.VITE_PORT ?? 5173,
  APP_VERSION: import.meta.env.VITE_APP_VERSION,
  MANAGE_CENTER_API_URL: import.meta.env.VITE_MANAGE_CENTER_API_URL,
  MES_API_URL: import.meta.env.VITE_MES_API_URL,
  DEVICE_API_URL: import.meta.env.VITE_DEVICE_API_URL,
  MANAGE_CENTER_API_PREFIX: '/manage-center-api',
  MES_API_PREFIX: '/mes-api',
  DEVICE_API_PREFIX: '/device-api',
  MODE: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD
})
