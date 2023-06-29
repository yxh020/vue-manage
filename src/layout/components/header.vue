<template>
  <a-layout-header class="header">
    <a-popconfirm
        title="确定退出吗？"
        ok-text="确定"
        cancel-text="取消"
        @confirm="logout"
    >
    <a-button type="link">退出登录</a-button>
  </a-popconfirm>
  </a-layout-header>
</template>

<script setup>
import { removeRole } from '@/utils/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  removeRole()
  router.replace({path:'login'})
}
</script>
<style scoped>
.header {
  background: #fff !important;
  box-sizing: border-box !important;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
</style>