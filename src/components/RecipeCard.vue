<script setup lang="ts">
import type { Recipe } from '@/types/recipe.ts'
import { RouterLink } from 'vue-router'
import RecipeStats from '@/components/RecipeStats.vue'

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

    <RecipeStats :serving="recipe.servings" :prep="recipe.prepMinutes" :cook="recipe.cookMinutes" />

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
