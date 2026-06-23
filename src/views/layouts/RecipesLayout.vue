<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'

defineProps<{
  className?: string
}>()
</script>

<template>
  <main :class="className">
    <slot />
  </main>
  <AppFooter />
</template>
