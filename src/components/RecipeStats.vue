<script setup lang="ts">
defineProps<{ serving: number; prep: number; cook: number }>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <div class="flex items-center gap-2.5">
      <img src="/images/icon-servings.svg" alt="Servings" />
      <p class="font-preset-9">Servings: {{ serving }}</p>
    </div>
    <div class="flex items-center gap-2.5">
      <img src="/images/icon-prep-time.svg" alt="Prep Time" />
      <p class="font-preset-9">Prep: {{ prep }} mins</p>
    </div>
    <div class="flex items-center gap-2.5">
      <img src="/images/icon-cook-time.svg" alt="Cook Time" />
      <p class="font-preset-9">Cook: {{ cook }} mins</p>
    </div>
  </div>
</template>
