<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getMainOrder({
      pageIndex: 1,
      pageSize: 10,
      conditions: '',
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
      prop="cCode"
      label="单号"
      width="40%"
    />
    <wd-table-col
      prop="cMemo"
      label="备注说明"
      width="40%"
    />
    <wd-table-col
      prop="dPlanDateStart"
      label="时间"
      width="40%"
    />
    <wd-table-col
      prop="cFactoryUnitName"
      label="车间"
      width="40%"
    />
    <wd-table-col
      prop="cEmployeeName"
      label="负责人"
      width="40%"
    />
  </wd-table>
</template>
