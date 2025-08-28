<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getOuterLate({
      pageIndex: 1,
      pageSize: 10,
      conditions: '',
      orderByFileds: ''
    })
    listData.value = [{ number: data.data }]
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
      prop="number"
      label="外部晚期单数"
      width="100%"
    />
  </wd-table>
</template>
