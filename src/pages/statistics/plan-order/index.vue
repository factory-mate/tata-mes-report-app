<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getPlanOrder({
      pageIndex: 1,
      pageSize: 10,
      conditions: `dPlanDateStart = ${new Date().toISOString().split('T')[0]}`,
      orderByFileds: ''
    })
    listData.value = data.data.data
  } catch {
    //
  }
}

onShow(() => {
  fetchData()
})
</script>

<template>
  <wd-table :data="listData">
    <wd-table-col
      prop="dPlanDateStartStr"
      label="生产日期"
      width="40%"
    />
    <wd-table-col
      prop="dPlanDateStartStr"
      label="排产日期"
      width="40%"
    />
    <wd-table-col
      prop="cFactoryUnitName"
      label="产线"
      width="40%"
    />
    <wd-table-col
      prop="count"
      label="任务门数"
      width="40%"
    />
    <wd-table-col
      prop="xk_count"
      label="线框门数"
      width="40%"
    />
  </wd-table>
</template>
