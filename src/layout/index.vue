<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider>
      <div class="logo">后台管理系统</div>
      <SideBar></SideBar>
    </a-layout-sider>
    <a-layout>
      <Header></Header>
      <a-layout-content style="margin: 0 16px">
        <Breadcrumb></Breadcrumb>
        <div class="main">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import SideBar from "./components/sideBar.vue";
import Breadcrumb from "./components/breadcrumb.vue";
import Header from './components/header.vue'
</script>

<style scoped>
.logo {
  color: #fff;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 35px;
  background: #334454;
  border-radius: 21px;
  margin: 20px;
}
.main {
  padding: "24px";
  background: #fff;
  min-height: 800px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
