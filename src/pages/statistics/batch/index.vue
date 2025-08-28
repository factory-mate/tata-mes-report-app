<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getBatch({
      pageIndex: 1,
      pageSize: 10,
      conditions: `cVouchTypeCode = 02 && dProductDate = ${new Date().toISOString().split('T')[0]}`,
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
      prop="cBatch"
      label="作业批次号"
      width="60%"
    />
    <wd-table-col
      prop="dProductDateStr"
      label="生产日期"
      width="40%"
    />
    <wd-table-col
      prop="iStatusName"
      label="状态"
      width="40%"
    />
    <wd-table-col
      prop="cCreateUserName"
      label="创建人"
      width="40%"
    />
  </wd-table>
</template>
