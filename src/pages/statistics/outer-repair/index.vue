<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getOuterRepair({
      pageIndex: 1,
      pageSize: 10,
      conditions: `dDate = ${new Date().toISOString().split('T')[0]}`,
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
      prop="iQuantity_Door"
      label="门扇数"
      width="50%"
    />
    <wd-table-col
      prop="iQuantity_Vouch"
      label="单数"
      width="50%"
    />
  </wd-table>
</template>
