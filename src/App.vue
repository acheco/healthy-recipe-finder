<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavDesktop from '@/components/NavDesktop.vue'
import NavMobile from '@/components/NavMobile.vue'
import ButtonLink from '@/components/ButtonLink.vue'

const routes = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/recipes', name: 'Recipes' },
]
</script>

<template>
  <header class="border-custom-neutral-300 border-b">
    <div
      class="wrapper lb:pb-5 lg:pb- flex items-center justify-between p-4 md:px-8 md:pt-8 lg:px-15 lg:py-5"
    >
      <img src="/images/logo.svg" alt="Logo" class="h-8 md:h-10" />
      <NavDesktop :routes="routes" className="hidden lg:block" />
      <ButtonLink to-route="/recipes" className="hidden lg:block"> Browse Recipes </ButtonLink>

      <NavMobile :routes="routes" className="lg:hidden" />
    </div>
  </header>

  <RouterView />
</template>
