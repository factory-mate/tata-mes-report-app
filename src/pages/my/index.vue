<script setup lang="ts">
import type { TokenUser } from '@/api/auth/types'
import { GlobalEnvConfig } from '@/constants'

const userInfo = ref<TokenUser | null>(null)

const logout = () => {
  uni.showToast({
    title: '退出成功',
    icon: 'success'
  })
  uni.removeStorageSync('token')
  uni.removeStorageSync('user')
  uni.redirectTo({ url: '/pages/index/index' })
}

onShow(() => {
  userInfo.value = uni.getStorageSync('user') as TokenUser
})
</script>

<template>
  <view class="page">
    <text>{{ userInfo?.UserName }}</text>
    <view style="margin-top: 12px">
      <wd-button @click="logout">注销</wd-button>
    </view>
    <text style="font-size: 10px; margin-top: 8px"> 版本：{{ GlobalEnvConfig.MODE }} </text>
  </view>
</template>

<style scoped lang="scss">
.page {
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
