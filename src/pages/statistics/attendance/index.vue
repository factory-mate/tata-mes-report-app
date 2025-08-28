<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getAttendance({
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
      width="38%"
    />
    <wd-table-col
      prop="iActualQuantity"
      label="出勤数/定岗数"
      width="32%"
    >
      <template #value="{ row }">
        <text>{{ row.iActualQuantity }}/{{ row.iStandtardQuantity }}</text>
      </template>
    </wd-table-col>
  </wd-table>
</template>
