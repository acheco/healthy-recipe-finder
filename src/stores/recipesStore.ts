import { defineStore } from 'pinia'
import { getRecipes } from '@/services/recipesService.ts'
import type { Recipe } from '@/types/recipe.ts'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [] as Recipe[],
    loading: false,
    error: null as string | null,
    loadingRecipes: false,
  }),

  getters: {
    randomRecipes: (state) => {
      const shuffled = [...state.recipes].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, 3)
    },
  },

  actions: {
    async fetchRecipes() {
      if (this.loadingRecipes) return
      this.loading = true
      this.error = null
      try {
        this.recipes = await getRecipes()
        this.loadingRecipes = true
      } catch (e) {
        this.error = e instanceof Error ? e.message : 'Error loading recipes'
      } finally {
        this.loading = false
      }
    },
  },
})
