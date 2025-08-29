<script setup lang="ts">
const codes = ref<string[]>([])

const listData = [
  {
    title: '人员出勤',
    url: '/pages/statistics/attendance/index',
    code: 'BI.ATTENDANCE'
  },
  {
    title: '设备故障统计',
    url: '/pages/statistics/device-failure/index',
    code: 'BI.DEVICE_STATUS_TJ'
  },
  {
    title: '能耗',
    url: '/pages/statistics/energy-comsumption/index',
    code: 'BI.ELECTRICAL'
  },
  {
    title: '车间设备巡检保养统计',
    url: '/pages/statistics/workshop-device/index',
    code: 'BI.XBTJ'
  },
  {
    title: '重点订单',
    url: '/pages/statistics/main-order/index',
    code: 'BI.KEYNOTEVOUCH'
  },
  {
    title: '内返统计',
    url: '/pages/statistics/internal-return/index',
    code: 'BI.Repair'
  },
  {
    title: '门扇包装任务',
    url: '/pages/statistics/door-package/index',
    code: 'BI.MSPackage'
  },
  {
    title: '生产任务统计',
    url: '/pages/statistics/production-task/index',
    code: 'BI.TaskTJ'
  },
  {
    title: '成品库存分类结存数量统计',
    url: '/pages/statistics/stock-rest/index',
    code: 'BI.CPKC'
  },
  {
    title: '外部晚期',
    url: '/pages/statistics/outer-late/index',
    code: 'BI.WBWQ'
  },
  {
    title: '当日排产批次查询',
    url: '/pages/statistics/batch/index',
    code: 'BI.TaskBatchQuery'
  },
  {
    title: '计划部下单统计',
    url: '/pages/statistics/plan-order/index',
    code: 'BI.XDTJ'
  },
  {
    title: '外部返修统计',
    url: '/pages/statistics/outer-repair/index',
    code: 'BI.WBFXTJ'
  }
]

function handleNav(url: string) {
  uni.navigateTo({ url })
}

onShow(() => {
  AuthAPI.menu().then((res) => {
    if (res.success) {
      res.data?.[0]?.Child.forEach((i: any) => {
        codes.value.push(i.cAuthCode)
      })
    }
  })
})
</script>

<template>
  <view class="page">
    <template
      v-for="(item, index) in listData"
      :key="index"
    >
      <wd-card
        v-if="codes.includes(item.code)"
        @click="handleNav(item.url)"
      >
        <view class="card-content">{{ item.title }}</view>
      </wd-card>
    </template>
  </view>
</template>

<style scoped lang="scss">
.page {
  padding-top: 6px;
  background-color: #f5f5f5;
  min-height: 100vh;
  .card-content {
    padding: 8px;
  }
}
</style>
