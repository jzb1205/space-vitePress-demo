<template>
  <div>{{ counter }}</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
const msg = ref(5343555)
const counter = computed(() => msg.value++)
</script>
