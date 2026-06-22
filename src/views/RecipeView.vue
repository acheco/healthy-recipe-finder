<script setup lang="ts">
import RecipesLayout from '@/views/layouts/RecipesLayout.vue'
import { computed, onMounted, ref } from 'vue'
import { useRecipesStore } from '@/stores/recipesStore.ts'
import { storeToRefs } from 'pinia'
import RecipeCard from '@/components/RecipeCard.vue'

const store = useRecipesStore()
const { recipes, loading, error } = storeToRefs(store)

const prepTime = ref('all')
const cookTime = ref('all')
const searchTerm = ref('')

const filteredRecipes = computed(() => {
  return recipes.value.filter((recipe) => {
    const prepTimeMatch = prepTime.value === 'all' || recipe.prepMinutes <= parseInt(prepTime.value)
    const cookTimeMatch = cookTime.value === 'all' || recipe.cookMinutes <= parseInt(cookTime.value)
    const searchTermMatch =
      recipe.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm.value.toLowerCase()),
      )
    return prepTimeMatch && cookTimeMatch && searchTermMatch
  })
})

onMounted(() => store.fetchRecipes())
</script>

<template>
  <RecipesLayout>
    <div class="px-4 pt-12 md:px-8 md:pt-16 lg:px-16 xl:px-32">
      <div
        class="font-preset-2-mobile text-custom-neutral-900 md:font-preset-2 flex flex-col space-y-3 pb-12 lg:items-center lg:text-center"
      >
        <h1>Explore our simple, healthy recipes</h1>
        <p class="font-preset-6 text-custom-neutral-600 lg:max-w-181">
          Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing.
          Use the search bar to find a recipe by name or ingredient, or simply scroll the list and
          let something delicious catch your eye.
        </p>
      </div>

      <div class="text-custom-neutral-900 flex flex-col gap-6">
        <div class="md:no-wrap flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div class="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <select
              name="prep-time"
              class="font-preset-7 rounded-lg bg-white px-4 py-2.5 lg:min-w-51 xl:min-w-[181px]"
              v-model="prepTime"
            >
              <option value="all">Max Prep Time</option>
              <option value="0">0 minutes</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
            </select>
            <select
              name="cook-time"
              class="font-preset-7 focus:ring-custom-neutral-900 rounded-md bg-white px-4 py-2.5 focus:ring-2 focus:ring-offset-2 focus:outline-none lg:min-w-51 xl:min-w-[181px]"
              v-model="cookTime"
            >
              <option value="all">Max Cook Time</option>
              <option value="0">0 minutes</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
              <option value="20">20 minutes</option>
            </select>
          </div>
          <input
            v-model="searchTerm"
            type="search"
            name="search"
            placeholder="Search by name or ingredient"
            class="font-preset-7 text-custom-neutral-900/70 focus:ring-custom-neutral-900 placeholder:text-custom-neutral-900/70 w-full rounded-md bg-white px-4 py-2.5 focus:ring-2 focus:ring-offset-2 focus:outline-none lg:max-w-[310px]"
          />
        </div>

        <div v-if="loading">
          <p>Loading recipes...</p>
        </div>

        <div v-if="error">
          <p class="text-center text-red-500">Error loading recipes: {{ error }}</p>
        </div>

        <div
          class="flex flex-col gap-[35px] lg:grid lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-8"
        >
          <RecipeCard v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe" />
        </div>
      </div>
    </div>
  </RecipesLayout>
</template>
