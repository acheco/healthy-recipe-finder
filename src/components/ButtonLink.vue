<script setup lang="ts">
import { type RouteLocationRaw, RouterLink } from 'vue-router'

defineProps<{
  toRoute: RouteLocationRaw
  className?: string
}>()

defineEmits(['click'])
</script>

<template>
  <RouterLink
    :to="toRoute"
    @click="$emit('click')"
    :class="[
      'bg-custom-neutral-900 font-preset-5 rounded-lg px-4 py-3 text-center text-white hover:cursor-pointer',
      className,
    ]"
  >
    <slot />
  </RouterLink>
</template>
