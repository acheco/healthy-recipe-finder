<script setup lang="ts">
import ButtonLink from '@/components/ButtonLink.vue'
</script>

<template>
  <div class="relative md:pt-16 xl:pt-0">
    <div
      class="bg-custom-neutral-200 relative flex flex-col items-center justify-center space-y-8 overflow-hidden rounded-3xl px-4 py-12 xl:min-h-99"
    >
      <div class="space-y-3 text-center">
        <h1 class="font-preset-2-mobile text-custom-neutral-900">Ready to cook smarter?</h1>
        <p class="text-custom-neutral-600 font-preset-6">
          Hit the button, pick a recipe, and get dinner on the table--fast
        </p>
      </div>
      <ButtonLink to-route="/recipes">Browse recipes</ButtonLink>

      <img
        src="../assets/images/pattern-knife.svg"
        alt="knife pattern"
        class="absolute -top-1 -right-15 hidden h-20 w-20 md:block md:h-75 md:w-64"
      />

      <img
        src="../assets/images/pattern-fork.svg"
        alt="knife pattern"
        class="absolute -bottom-5 -left-20 hidden h-20 w-20 md:block md:h-75 md:w-64"
      />
    </div>
  </div>
</template>
