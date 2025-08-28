<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getWorkshopDevice(
      {
        pageIndex: 1,
        pageSize: 10,
        conditions: '',
        orderByFileds: ''
      },
      1
    )
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
      prop="cLinecFactoryUnitName"
      label="产线"
      width="40%"
    />
    <wd-table-col
      prop="cVouchType"
      label="类型"
      width="40%"
    />
    <wd-table-col
      prop="iQuantityAll"
      label="未点检数/总任务数"
      width="40%"
    >
      <template #value="{ row }">
        <text>{{ row.iQuantityRest }}/{{ row.iQuantityAll }}</text>
      </template>
    </wd-table-col>
  </wd-table>
</template>
