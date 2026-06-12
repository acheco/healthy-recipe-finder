<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'
import ButtonLink from '@/components/ButtonLink.vue'

defineProps<{
  routes: { id: number; path: string; name: string }[]
  className?: string
}>()

const isOpen = ref(false)

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') isOpen.value = false
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div :class="className">
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="bg-custom-neutral-300 flex h-10 w-10 items-center justify-center rounded-sm lg:hidden"
      :aria-expanded="isOpen"
      aria-controls="mobile-menu"
      :aria-label="isOpen ? 'Close menu' : 'Open menu'"
    >
      <img src="../assets/images/icon-hamburger-menu.svg" alt="Hamburger Icon" />
    </button>

    <div v-show="isOpen" class="fixed inset-0 z-10" @click="isOpen = false" aria-hidden="true" />

    <div
      v-show="isOpen"
      class="absolute top-16 left-0 z-10 flex w-full px-4 md:top-21"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu"
      id="mobile-menu"
    >
      <div class="flex w-full flex-col gap-6 rounded-md bg-white p-4">
        <RouterLink
          v-for="route in routes"
          :to="route.path"
          :key="route.id"
          @click="isOpen = false"
          class="font-preset-7 text-custom-neutral-900 hover:cursor-pointer"
        >
          {{ route.name }}
        </RouterLink>

        <ButtonLink to-route="/recipes" @click="isOpen = false"> Browse Recipes </ButtonLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
