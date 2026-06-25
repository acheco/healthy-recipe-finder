<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRecipesStore } from '@/stores/recipesStore.ts'
import { storeToRefs } from 'pinia'
import RecipeStats from '@/components/RecipeStats.vue'
import RecipesLayout from '@/views/layouts/RecipesLayout.vue'
import OtherRecipes from '@/components/OtherRecipes.vue'

const base = import.meta.env.BASE_URL
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
  <RecipesLayout className="lg:px-24">
    <div class="px-4 py-12">
      <p v-if="loading">Loading...</p>
      <p v-if="error">Error: {{ error }}</p>

      <div v-if="recipe" class="space-y-4">
        <h1 class="font-preset-7 text-custom-neutral-900">
          <span class="opacity-60">Recipes / </span>{{ recipe.title }}
        </h1>
        <div class="space-y-10 lg:grid lg:grid-cols-2 lg:gap-12">
          <img
            :src="`${base}${recipe.image.large}`"
            :alt="recipe.title"
            class="w-full rounded-xl object-cover xl:h-145 xl:w-145"
          />
          <div class="space-y-5">
            <h2 class="font-preset-2-mobile text-custom-neutral-900">{{ recipe.title }}</h2>
            <p class="font-preset-6 text-custom-neutral-600">{{ recipe.overview }}</p>
            <RecipeStats
              :serving="recipe.servings"
              :prep="recipe.prepMinutes"
              :cook="recipe.cookMinutes"
            />
            <div class="space-y-4">
              <h3 class="font-preset-5 text-custom-neutral-900">Ingredients</h3>
              <ul class="pl-5">
                <li
                  v-for="ingredient in recipe.ingredients"
                  :key="ingredient"
                  class="font-preset-6 text-custom-neutral-600 flex items-center gap-2"
                >
                  <img :src="`${base}images/icon-bullet-point.svg`" alt="Bullet point" />
                  {{ ingredient }}
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="font-preset-5 text-custom-neutral-900">Instructions</h3>
              <ul class="pl-5">
                <li
                  v-for="instruction in recipe.instructions"
                  :key="instruction"
                  class="font-preset-6 text-custom-neutral-600 flex items-center gap-2"
                >
                  <img :src="`${base}images/icon-bullet-point.svg`" alt="Bullet point" />
                  {{ instruction }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Not found section   -->
      <div
        v-else-if="!loading && !error"
        class="font-preset-2-mobile text-custom-neutral-900 bg-opacity-50 grid place-items-center rounded-lg border p-4 text-center shadow-md"
      >
        <p>Recipe not found.</p>
        <RouterLink
          to="/recipes"
          class="bg-custom-neutral-600 font-preset-7 mt-8 rounded-md px-4 py-2 text-white hover:cursor-pointer"
        >
          Back to Recipes
        </RouterLink>
      </div>
    </div>
    <hr class="border-custom-neutral-300" />
    <!-- Other recipes section  -->
    <Suspense>
      <template #default>
        <OtherRecipes />
      </template>
      <template #fallback>
        <div class="px-4 pt-12 pb-12 lg:pb-24">
          <h2 class="font-preset-3 text-custom-neutral-900">More recipes</h2>
          <p>Loading other recipes...</p>
        </div>
      </template>
    </Suspense>
  </RecipesLayout>
</template>
