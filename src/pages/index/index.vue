<script setup lang="ts">
const loginForm = ref({
  username: '',
  password: ''
})

const handleLogin = async () => {
  if (loginForm.value.username === '' || loginForm.value.password === '') {
    uni.showToast({
      title: '账号或密码不能为空',
      icon: 'none'
    })
    return
  }
  try {
    const { data } = await AuthAPI.login({
      cLoginName: loginForm.value.username,
      cPassWord: loginForm.value.password
    })
    uni.setStorageSync('token', data.token)
    uni.setStorageSync('user', data.token_user)
    uni.switchTab({ url: '/pages/home/index' })
  } catch {
    //
  }
}

onLoad(() => {})
</script>

<template>
  <view class="page">
    <view>
      <image
        class="logo"
        src="/static/login_logo.png"
        mode="widthFix"
      />
    </view>
    <view class="form">
      <wd-cell-group border>
        <wd-input
          v-model="loginForm.username"
          label="账号"
          clearable
          label-width="15%"
        />
        <wd-input
          v-model="loginForm.password"
          label="密码"
          clearable
          show-password
          label-width="15%"
        />
      </wd-cell-group>
    </view>
    <view class="btn">
      <wd-button @click="handleLogin">登录</wd-button>
    </view>
  </view>
</template>

<style scoped lang="scss">
.page {
  .logo {
    width: 100%;
    margin-top: 30%;
  }

  .form {
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;
  }

  .btn {
    padding-top: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
}
</style>
