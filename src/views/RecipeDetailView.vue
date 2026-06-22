<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRecipesStore } from '@/stores/recipesStore.ts'
import { storeToRefs } from 'pinia'

const route = useRoute()
const store = useRecipesStore()
const { recipes, loading, error } = storeToRefs(store)

const recipe = computed(() => recipes.value.find((r) => r.slug === route.params.slug))

onMounted(() => {
  if (!recipes.value.length) {
    store.fetchRecipes()
  }
})
</script>

<template>
  <div class="px-4 py-12">
    <p v-if="loading">Loading...</p>
    <p v-if="error">Error: {{ error }}</p>

    <div v-if="recipe" class="space-y-4">
      <h1 class="font-preset-7 text-custom-neutral-900">
        <span class="opacity-60">Recipes / </span>{{ recipe.title }}
      </h1>

      <div class="space-y-10">
        <img :src="recipe.image.large" :alt="recipe.title" class="w-full rounded-xl" />
        <div class="space-y-5">
          <h2 class="font-preset-2-mobile text-custom-neutral-900">{{ recipe.title }}</h2>
          <p class="font-preset-6 text-custom-neutral-600">{{ recipe.overview }}</p>
          <div></div>
        </div>
      </div>
    </div>
    <p v-else-if="!loading && !error">Recipe not found.</p>
  </div>
</template>
