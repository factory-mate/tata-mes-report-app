<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getStockRest({
      pageIndex: 1,
      pageSize: 10,
      conditions: '',
      orderByFileds: ''
    })
    listData.value = data.data
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
      width="50%"
    />
    <wd-table-col
      prop="Quantity"
      label="库存包数"
      width="50%"
    />
  </wd-table>
</template>
