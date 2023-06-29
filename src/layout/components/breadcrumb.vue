<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>{{routeName}}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from 'vue-router'
import { useStore } from "vuex";

const router = useRouter()
const store = useStore();
const sidebar = computed(() => store.getters.sidebar);

const routeName = computed(() => {
  return sidebar.value.find(v => v.name == router.currentRoute.value.name)?.mate?.name
})
</script>