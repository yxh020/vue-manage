<template>
  <a-menu :selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item v-for="item in sidebar" @click="pushRoute(item.path)" :key="item.name">
        <span>{{item.mate.name}}</span>
      </a-menu-item>
  </a-menu>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore();
const sidebar = computed(() => store.getters.sidebar);

const selectedKeys = ref([router.currentRoute.value.name]);

watchEffect(() => {
  selectedKeys.value = [router.currentRoute.value.name]
});

function pushRoute(path) {
    router.push({ path })
}
</script>

<style scoped>
::v-deep .ant-menu-title-content{
    box-sizing: border-box;
    padding-left: 50px;
}
</style>