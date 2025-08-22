<script setup lang="ts">
const logout = () => {
  uni.showToast({
    title: '退出成功',
    icon: 'success'
  })
  uni.redirectTo({ url: '/pages/index/index' })
}
</script>

<template>
  <view class="page">
    <wd-button @click="logout">注销</wd-button>
  </view>
</template>

<style scoped lang="scss">
.page {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
