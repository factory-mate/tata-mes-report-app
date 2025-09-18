<script setup lang="ts">
import dayjs from 'dayjs'
import { useToast } from 'wot-design-uni'

const toast = useToast()

const model = reactive<any>({})
const form = ref()
const lineData = ref<any>([])
const lineTree = ref<any>([])

// const area = ref<any[]>([
//   colPickerData.map((item) => ({
//     value: item.value,
//     label: item.text
//   }))
// ])
// const areaChange: ColPickerColumnChange = ({ selectedItem, resolve, finish }) => {
//   const areaData = findChildrenByCode(colPickerData, selectedItem.value)
//   if (areaData && areaData.length) {
//     resolve(
//       areaData.map((item) => ({
//         value: item.value,
//         label: item.text
//       }))
//     )
//   } else {
//     finish()
//   }
// }

function handleSubmit() {
  form.value
    .validate()
    .then(({ valid }: any) => {
      if (valid) {
        StatisticsAPI.addAttendance({
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

// function findChildrenByCode(data: any, code?: string): any {
//   if (!code) {
//     return data
//   }
//   // eslint-disable-next-line no-restricted-syntax
//   for (const item of data) {
//     if (item.value === code) {
//       return item.children || null
//     }
//     if (item.children) {
//       const childrenResult = findChildrenByCode(item.children, code)
//       if (childrenResult) {
//         return childrenResult
//       }
//     }
//   }
//   return null
// }

// const columnChange = ({ selectedItem, resolve, finish }: any) => {
//   const areaData = findChildrenByCode(colPickerData, selectedItem.value)
//   if (areaData && areaData.length) {
//     resolve(
//       areaData.map((item) => ({
//         value: item.value,
//         label: item.text
//       }))
//     )
//   } else {
//     finish()
//   }
// }

const displayFormat = (selectedItems: Record<string, any>[]) =>
  selectedItems.map((i) => i.label).join('-')

onShow(() => {
  StatisticsAPI.getLineTree().then((res) => {
    lineTree.value = res.data
    lineData.value = [
      res.data.map((item: any) => ({
        value: item.cFactoryUnitCode,
        label: item.cFactoryUnitName
      }))
    ]
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
        v-model="model.cFactoryUnitCode"
        label="产线"
        placeholder="请选择产线"
        label-width="100px"
        prop="cFactoryUnitCode"
        :columns="lineData"
        :display-format="displayFormat"
      />
      <wd-cell
        title="定岗人数"
        title-width="100px"
        prop="iStandtardQuantity"
      >
        <wd-input-number
          v-model="model.iStandtardQuantity"
          input-width="80px"
          long-press
          :min="0"
        />
      </wd-cell>
      <wd-cell
        title="实际到岗人数"
        title-width="100px"
        prop="iActualQuantity"
      >
        <wd-input-number
          v-model="model.iActualQuantity"
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
