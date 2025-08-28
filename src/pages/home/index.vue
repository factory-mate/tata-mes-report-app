<script setup lang="ts">
const listData = [
  {
    title: '人员出勤',
    url: '/pages/statistics/attendance/index'
  },
  {
    title: '设备故障统计',
    url: '/pages/statistics/device-failure/index'
  },
  {
    title: '能耗',
    url: '/pages/statistics/energy-comsumption/index'
  },
  {
    title: '车间设备巡检保养统计',
    url: '/pages/statistics/workshop-device/index'
  },
  {
    title: '重点订单',
    url: '/pages/statistics/main-order/index'
  },
  {
    title: '内返统计',
    url: '/pages/statistics/internal-return/index'
  },
  {
    title: '门扇包装任务',
    url: '/pages/statistics/door-package/index'
  },
  {
    title: '生产任务统计',
    url: '/pages/statistics/production-task/index'
  },
  {
    title: '成品库存分类结存数量统计',
    url: '/pages/statistics/stock-rest/index'
  },
  {
    title: '外部晚期',
    url: '/pages/statistics/outer-late/index'
  },
  {
    title: '当日排产批次查询',
    url: '/pages/statistics/batch/index'
  },
  {
    title: '计划部下单统计',
    url: '/pages/statistics/plan-order/index'
  },
  {
    title: '外部返修统计',
    url: '/pages/statistics/outer-repair/index'
  }
]

function handleNav(url: string) {
  uni.navigateTo({ url })
}
</script>

<template>
  <view class="page">
    <wd-card
      v-for="(item, index) in listData"
      :key="index"
      @click="handleNav(item.url)"
    >
      <view class="card-content">{{ item.title }}</view>
    </wd-card>
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
