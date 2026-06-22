import recipesData from '@/data.json'
import type { Recipe } from '@/types/recipe.ts'

export async function getRecipes(): Promise<Recipe[]> {
  return recipesData as Recipe[]
}
