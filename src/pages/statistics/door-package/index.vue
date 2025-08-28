<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getDoorPackage({
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
      prop="dPlanDateStartStr"
      label="日期"
      width="35%"
    />
    <wd-table-col
      prop="cFactoryUnitName"
      label="门扇产线"
      width="35%"
    />
    <wd-table-col
      prop="iQuantity"
      label="未包装门扇总数"
      width="30%"
    />
  </wd-table>
</template>
