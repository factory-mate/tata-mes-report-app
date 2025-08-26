<script setup lang="ts">
import type { TokenUser } from '@/api/auth/types'

const userInfo = ref<TokenUser | null>(null)

const logout = () => {
  uni.showToast({
    title: '退出成功',
    icon: 'success'
  })
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
