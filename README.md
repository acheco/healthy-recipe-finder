# Recipe Finder

A Vue 3 single-page application for browsing and discovering recipes. Displays recipe cards with prep time, cook time, servings, ingredients, and step-by-step instructions. Built as a portfolio project to demonstrate component architecture, state management with Pinia, and routing with Vue Router.

## Features

- Browse all available recipes in a responsive grid layout
- View full recipe detail: overview, prep/cook time, servings, ingredients, and instructions
- Random recipe suggestions on the detail page
- Responsive navigation with separate desktop and mobile menus
- About page

## Tech stack

| Layer     | Technology                         |
| --------- | ---------------------------------- |
| Framework | Vue 3 (Composition API) + Vite     |
| Language  | TypeScript                         |
| State     | Pinia                              |
| Routing   | Vue Router 5                       |
| Styling   | Tailwind CSS v4                    |
| Fonts     | Nunito / Nunito Sans (self-hosted) |
| Linting   | ESLint + oxlint + Prettier         |

## Project structure

```
src/
├── assets/          # Global CSS and self-hosted fonts
├── components/      # Reusable UI components
│   ├── AppFooter.vue
│   ├── ButtonLink.vue
│   ├── NavDesktop.vue
│   ├── NavMobile.vue
│   ├── OtherRecipes.vue
│   ├── ReadyToCook.vue
│   ├── RecipeCard.vue
│   ├── RecipeStats.vue
│   └── icons/
├── views/           # Page-level views
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── RecipeView.vue
│   ├── RecipeDetailView.vue
│   └── layouts/
│       ├── AppLayout.vue
│       └── RecipesLayout.vue
├── router/          # Vue Router configuration
├── services/        # Data fetching (recipesService.ts)
├── stores/          # Pinia store (recipesStore.ts)
├── types/           # TypeScript interfaces (recipe.ts)
├── data.json        # Local recipe data
└── main.ts
```

## Routes

| Path             | View             | Description                         |
| ---------------- | ---------------- | ----------------------------------- |
| `/`              | HomeView         | Landing page with featured sections |
| `/about`         | AboutView        | About page (lazy-loaded)            |
| `/recipes`       | RecipeView       | Full recipe listing                 |
| `/recipes/:slug` | RecipeDetailView | Individual recipe detail            |

## Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- npm

## Local setup

```bash
# 1. Clone the repository
git clone https://github.com/acheco/recipe-finder.git
cd recipe-finder

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

> No external API key is required. Recipe data is served from `src/data.json`.

## Available scripts

| Script                | Description                             |
| --------------------- | --------------------------------------- |
| `npm run dev`         | Start dev server with hot reload        |
| `npm run build`       | Type-check then build for production    |
| `npm run build-only`  | Build for production (skip type-check)  |
| `npm run preview`     | Preview the production build locally    |
| `npm run type-check`  | Run TypeScript type checking            |
| `npm run lint`        | Run oxlint and ESLint with auto-fix     |
| `npm run format`      | Format source files with Prettier       |

## Data model

```ts
interface Recipe {
  id: number
  title: string
  slug: string
  image: { large: string; small: string }
  overview: string
  servings: number
  prepMinutes: number
  cookMinutes: number
  ingredients: string[]
  instructions: string[]
}
```

## License

MIT