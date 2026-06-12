<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  routes: { id: number; path: string; name: string }[]
  className?: string
}>()
</script>

<template>
  <nav :class="className">
    <div class="flex items-center gap-10">
      <RouterLink
        v-for="route in routes"
        :to="route.path"
        :key="route.id"
        class="font-preset-7 text-custom-neutral-900"
        activeClass="underline underline-offset-4 decoration-[3px] decoration-custom-orange-500 "
      >
        {{ route.name }}
      </RouterLink>
    </div>
  </nav>
</template>
