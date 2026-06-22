<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <main class="px-4 pt-12 md:px-8 lg:px-20 lg:pt-20 xl:px-31">
    <slot />
  </main>
  <AppFooter />
</template>
