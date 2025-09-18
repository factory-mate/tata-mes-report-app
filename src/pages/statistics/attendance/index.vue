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

function handleAdd() {
  uni.navigateTo({
    url: '/pages/statistics/attendance/add'
  })
}

function handleDeleteItem(row: any) {
  uni.showModal({
    title: '提示',
    content: '确定删除吗？',
    confirmText: '确定',
    cancelText: '取消',
    success: (res) => {
      if (res.confirm) {
        StatisticsAPI.delAttendance([row.UID])
          .then(() => {
            uni.showToast({
              title: '删除成功',
              icon: 'success'
            })
          })
          .finally(() => {
            fetchData()
          })
      }
    }
  })
}

onShow(() => {
  fetchData()
})
</script>

<template>
  <wd-button
    style="float: right; margin: 4px"
    @click="handleAdd"
  >
    新增
  </wd-button>
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
    <wd-table-col
      prop="operate"
      label="操作"
      width="12%"
    >
      <template #value="{ row }">
        <wd-button
          type="error"
          size="small"
          @click="handleDeleteItem(row)"
        >
          删除
        </wd-button>
      </template>
    </wd-table-col>
  </wd-table>
</template>
