<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import { storeToRefs } from 'pinia'
import { useRecipesStore } from '@/stores/recipesStore.ts'
const store = useRecipesStore()
const { randomRecipes } = storeToRefs(store)
</script>

<template>
  <div class="px-4 pt-12 pb-12 lg:pb-24">
    <h2 class="font-preset-3 text-custom-neutral-900">More recipes</h2>
    <div class="flex flex-col gap-8 pt-12 lg:grid lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-8">
      <RecipeCard v-for="recipe in randomRecipes || []" :key="recipe.slug" :recipe="recipe" />
    </div>
  </div>
</template>
