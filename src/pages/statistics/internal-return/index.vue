<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getInternalReturn({
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
      width="40%"
    />
    <wd-table-col
      prop="cFactoryUnitName"
      label="产线"
      width="40%"
    />
    <wd-table-col
      prop="cProductType"
      label="产品类型"
      width="40%"
    />
    <wd-table-col
      prop="iQuantity"
      label="内返数量"
      width="40%"
    />
  </wd-table>
</template>
