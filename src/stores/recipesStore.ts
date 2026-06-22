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
