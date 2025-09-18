<script lang="ts" setup>
const codes = ref<string[]>([])
const listData = ref<any[]>([])

async function fetchData() {
  try {
    const data = await StatisticsAPI.getPlanQty({
      pageIndex: 1,
      pageSize: 20,
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
    url: '/pages/statistics/plan-qty/add'
  })
}

function handleEdit(row: any) {
  uni.navigateTo({
    url: `/pages/statistics/plan-qty/edit?UID=${row.UID}`
  })
}

function handleDelete(row: any) {
  uni.showModal({
    title: '提示',
    content: '确定删除吗？',
    confirmText: '确定',
    cancelText: '取消',
    success: (res) => {
      if (res.confirm) {
        StatisticsAPI.delPlanQtyTask([row.UID])
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
  codes.value = uni.getStorageSync('auth')
  fetchData()
})
</script>

<template>
  <wd-button
    v-if="codes.includes('BI.PLANQTY_DAY.Add')"
    style="float: right; margin: 4px"
    @click="handleAdd"
  >
    新增
  </wd-button>
  <wd-table :data="listData">
    <wd-table-col
      prop="cFactoryUnitName"
      label="产线"
      width="40%"
    />
    <wd-table-col
      prop="iQuantity"
      label="计划产量"
      width="40%"
    />

    <wd-table-col
      prop="dDateStr"
      label="日期"
      width="40%"
    />
    <wd-table-col
      v-if="codes.includes('BI.PLANQTY_DAY.Add')"
      prop="operate"
      label="操作"
      width="30%"
    >
      <template #value="{ row }">
        <wd-button
          size="small"
          @click="handleEdit(row)"
        >
          编辑
        </wd-button>
        <wd-button
          style="margin-left: 4px"
          type="error"
          size="small"
          @click="handleDelete(row)"
        >
          删除
        </wd-button>
      </template>
    </wd-table-col>
  </wd-table>
</template>
