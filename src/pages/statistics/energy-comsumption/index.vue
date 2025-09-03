<script lang="ts" setup>
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getEnergyConsumption({
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
      prop="iElectricalAll_Month"
      label="当月月累计电量"
      width="40%"
    />
    <wd-table-col
      prop="iDoorElectrical_Month"
      label="单产品月平均能耗"
      width="40%"
    />
    <wd-table-col
      prop="iElectricalAll"
      label="当日电量"
      width="40%"
    />
    <wd-table-col
      prop="iDoorElectrical"
      label="当日单产品平均能耗"
      width="40%"
    />
    <wd-table-col
      prop="dDateStr"
      label="日期"
      width="40%"
    />
  </wd-table>
</template>
