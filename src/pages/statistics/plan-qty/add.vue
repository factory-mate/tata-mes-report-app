<script setup lang="ts">
import dayjs from 'dayjs'
import { useToast } from 'wot-design-uni'

const toast = useToast()

const model = reactive<any>({ pickerData: [] })
const form = ref()
const columns = ref<any[][]>([])
const lineTree = ref<any>([])

function handleConfirmPicker({ selectedItems }: any) {
  const data = selectedItems.at(-1)
  model.cFactoryUnitCode = data.cFactoryUnitCode
  model.cFactoryUnitName = data.cFactoryUnitName
}

function handleSubmit() {
  form.value
    .validate()
    .then(({ valid }: any) => {
      if (valid) {
        StatisticsAPI.addPlanQty({
          ...model,
          dDate: dayjs(model.dDate).format('YYYY-MM-DD')
        }).then(() => {
          toast.success({ msg: '提交成功' })
          uni.navigateBack()
        })
      }
    })
    .catch(() => {})
}

function findChildrenByCode(data: any, code?: string): any {
  if (!code) {
    return data
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const item of data) {
    if (item.cFactoryUnitCode === code) {
      return item.Child || null
    }
    if (item.Child) {
      const childrenResult = findChildrenByCode(item.Child, code)
      if (childrenResult) {
        return childrenResult
      }
    }
  }
  return null
}

const columnChange = ({ selectedItem, resolve, finish }: any) => {
  const data = findChildrenByCode(lineTree.value, selectedItem.cFactoryUnitCode)
  if (data && data.length) {
    resolve(data)
  } else {
    finish()
  }
}

const displayFormat = (selectedItems: Record<string, any>[]) =>
  selectedItems.at(-1)?.cFactoryUnitName ?? ''

onShow(() => {
  StatisticsAPI.getLineTree().then((res) => {
    columns.value = [res.data]
    lineTree.value = res.data
  })
})
</script>

<template>
  <wd-form
    ref="form"
    :model="model"
  >
    <wd-cell-group border>
      <wd-calendar
        v-model="model.dDate"
        label="日期"
        label-width="100px"
        placeholder="请选择日期"
        prop="dDate"
      />
      <wd-col-picker
        v-model="model.pickerData"
        label="产线"
        placeholder="请选择产线"
        label-width="100px"
        prop="cFactoryUnitCode"
        label-key="cFactoryUnitName"
        value-key="cFactoryUnitCode"
        :columns="columns"
        :column-change="columnChange"
        :display-format="displayFormat"
        @confirm="handleConfirmPicker"
      />
      <wd-cell
        title="计划产量"
        title-width="100px"
        prop="iQuantity"
      >
        <wd-input-number
          v-model="model.iQuantity"
          input-width="80px"
          long-press
          :min="0"
        />
      </wd-cell>
      <wd-textarea
        v-model="model.cMemo"
        label="备注"
        label-width="100px"
        prop="cMemo"
        clearable
        placeholder="请输入备注"
      />
    </wd-cell-group>
    <wd-divider color="#e8e8e8" />
    <wd-button
      style="margin: 0 8px"
      size="large"
      block
      @click="handleSubmit"
    >
      提交
    </wd-button>
  </wd-form>
</template>
