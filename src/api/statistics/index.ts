export const StatisticsAPI = {
  // 人员出勤
  getAttendance: (data: PageDto) =>
    request<Page>({
      url: `${GlobalEnvConfig.MANAGE_CENTER_API_PREFIX}/api/attendance/GetForPage`,
      method: 'POST',
      data
    }),
  getLineTree: () =>
    request<any>({
      url: `${GlobalEnvConfig.MANAGE_CENTER_API_PREFIX}/api/MES_Factorymodel/GetForTreeOnLimit`,
      method: 'GET',
      data: {
        EndType: 'Line',
        cDictonaryTypeCode: 'cFactoryUnitName'
      }
    }),
  addAttendance: (data: any) =>
    request<any>({
      url: `${GlobalEnvConfig.MANAGE_CENTER_API_PREFIX}/api/attendance/add`,
      method: 'POST',
      data
    }),
  editAttendance: (data: any) =>
    request<any>({
      url: `${GlobalEnvConfig.MANAGE_CENTER_API_PREFIX}/api/attendance/edit`,
      method: 'POST',
      data
    }),
  getAttendanceDetail: (val: string) =>
    request<any>({
      url: `${GlobalEnvConfig.MANAGE_CENTER_API_PREFIX}/api/attendance/GetById`,
      method: 'GET',
      data: {
        val
      }
    }),
  delAttendance: (ids: string[]) =>
    request<any>({
      url: `${GlobalEnvConfig.MANAGE_CENTER_API_PREFIX}/api/attendance/del`,
      method: 'DELETE',
      data: ids
    }),

  getDeviceFailure: (data: PageDto) =>
    request<Page>({
      url: `${GlobalEnvConfig.DEVICE_API_PREFIX}/api/R_DEVICE_STATUS/GetForPage_TJ`,
      method: 'POST',
      data
    }),
  getEnergyConsumption: (data: PageDto) =>
    request<Page>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/R_ELECTRICAL/getForPage`,
      method: 'POST',
      data
    }),
  getWorkshopDevice: (data: PageDto, cType: number) =>
    request<R<any>>({
      url: `${GlobalEnvConfig.DEVICE_API_PREFIX}/api/R_CJ_XBVouch/GetCJVouch_TJ?cType=${cType}`,
      method: 'POST',
      data
    }),
  getMainOrder: (data: PageDto) =>
    request<Page>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/KEYNOTEVOUCH/getForPage`,
      method: 'POST',
      data
    }),
  getInternalReturn: (data: PageDto) =>
    request<Page>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/R_Repair_MX/GetForPage_TJ`,
      method: 'POST',
      data
    }),
  getDoorPackage: (data: PageDto) =>
    request<Page>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/V_Task/Get_N_MSBZ`,
      method: 'POST',
      data
    }),
  // 生产任务统计
  getProductionTask: (data: PageDto) =>
    request<Page>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/SDWGTJ/Get_Mobile_Task_WGTJ`,
      method: 'POST',
      data
    }),
  // 产能数据维护
  getPlanQty: (data: PageDto) =>
    request<Page>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/PLANQTY_DAY/GetForPage`,
      method: 'POST',
      data
    }),
  addPlanQty: (data: any) =>
    request<any>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/PLANQTY_DAY/add`,
      method: 'POST',
      data
    }),
  editPlanQty: (data: any) =>
    request<any>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/PLANQTY_DAY/edit`,
      method: 'POST',
      data
    }),
  getPlanQtyDetail: (val: string) =>
    request<any>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/PLANQTY_DAY/GetById`,
      method: 'GET',
      data: {
        val
      }
    }),
  delPlanQtyTask: (ids: string[]) =>
    request<any>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/PLANQTY_DAY/Del`,
      method: 'DELETE',
      data: ids
    }),

  getStockRest: (data: PageDto) =>
    request<R<any[]>>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/SDWGTJ/Get_Mobile_CJBZ_WGTJ`,
      method: 'POST',
      data
    }),
  getOuterLate: (data: PageDto) =>
    request<R<number>>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/PRODUCTVOUCH/Get_Mobile_WQDS`,
      method: 'POST',
      data
    }),
  getBatch: (data: PageDto) =>
    request<Page>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/PRODUCT_TASK/GetForPage`,
      method: 'POST',
      data
    }),
  getPlanOrder: (data: PageDto) =>
    request<Page>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/PRODUCT_TASK/GetTask_TJ_ForAPS`,
      method: 'POST',
      data
    }),
  getOuterRepair: (data: PageDto) =>
    request<Page>({
      url: `${GlobalEnvConfig.MES_API_PREFIX}/api/R_WFTJ/getForPage`,
      method: 'POST',
      data
    })
}
