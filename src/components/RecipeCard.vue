<script setup lang="ts">
import type { Recipe } from '@/types/recipe.ts'
import { RouterLink } from 'vue-router'

defineProps<{ recipe: Recipe }>()
</script>

<template>
  <div class="flex flex-col space-y-4 rounded-xl bg-white p-2 shadow-md lg:justify-between">
    <picture>
      <source :srcset="recipe.image.small" media="(max-width: 600px)" />
      <source :srcset="recipe.image.large" media="(max-width: 1200px)" />
      <img :src="recipe.image.large" :alt="recipe.title" class="h-auto w-full rounded-xl" />
    </picture>

    <div class="space-y-2.5">
      <h2 class="font-preset-5 text-custom-neutral-900">{{ recipe.title }}</h2>
      <p>{{ recipe.overview }}</p>
    </div>

    <div class="flex flex-wrap items-center gap-4">
      <div class="flex items-center gap-2.5">
        <img src="/images/icon-servings.svg" alt="Servings" />
        <p class="font-preset-9">Servings: {{ recipe.servings }}</p>
      </div>
      <div class="flex items-center gap-2.5">
        <img src="/images/icon-prep-time.svg" alt="Prep Time" />
        <p class="font-preset-9">Prep: {{ recipe.prepMinutes }} mins</p>
      </div>
      <div class="flex items-center gap-2.5">
        <img src="/images/icon-cook-time.svg" alt="Cook Time" />
        <p class="font-preset-9">Cook: {{ recipe.cookMinutes }} mins</p>
      </div>
    </div>

    <RouterLink
      :to="{
        name: 'recipe',
        params: { slug: recipe.slug },
        state: { recipe },
      }"
      name="recipe"
      class="font-preset-8 bg-custom-neutral-900 rounded-full px-8 py-3 text-center text-white hover:cursor-pointer"
    >
      View Recipe
    </RouterLink>
  </div>
</template>
