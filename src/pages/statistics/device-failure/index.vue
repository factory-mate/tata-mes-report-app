<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getDeviceFailure({
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
      prop="cCJName"
      label="车间"
      width="30%"
    />
    <wd-table-col
      prop="cFactoryUnitName"
      label="产线"
      width="55%"
    />
    <wd-table-col
      prop="cDeviceName"
      label="设备名称"
      width="55%"
    />
    <wd-table-col
      prop="iRepairTime"
      label="维修时间（分钟）"
      width="32%"
    />
  </wd-table>
</template>
