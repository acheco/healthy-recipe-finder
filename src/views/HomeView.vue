<script setup lang="ts">
import AppLayout from '@/views/layouts/AppLayout.vue'
import ButtonLink from '@/components/ButtonLink.vue'
import IconContainer from '@/components/icons/IconContainer.vue'
import ReadyToCook from '@/components/ReadyToCook.vue'
</script>

<template>
  <AppLayout>
    <!--  Healthy meals section  -->
    <div class="lg:pb-24">
      <div class="mb-12 space-y-8 lg:flex lg:flex-col lg:items-center lg:justify-center">
        <div class="relative">
          <h1
            class="font-preset-1-mobile text-custom-neutral-900 md:font-preset-1-tablet lg:font-preset-1 pb-4"
          >
            <span class="">Healthy</span> meals, zero fuss
          </h1>
          <p class="font-preset-6 text-custom-neutral-600 pb-8">
            Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no
            guesswork.
          </p>
          <div
            class="bg-custom-orange-500/40 absolute top-7 left-0 -z-10 h-[23px] w-[183px] rounded-md md:h-[29px] md:w-[230px] lg:top-9 lg:h-[39px] lg:w-[270px]"
          />
        </div>
        <ButtonLink to-route="/recipes" className="px-8 py-4">Start exploring</ButtonLink>
      </div>

      <picture>
        <source
          srcset="/images/image-home-hero-large.webp"
          type="image/webp"
          media="(min-width: 1024px)"
        />
        <source
          media="(min-width: 375)"
          srcset="/images/image-home-hero-small.webp"
          type="image/webp"
        />
        <img
          src="/images/image-home-hero-small.webp"
          alt="Hero image"
          class="w-full rounded-lg border-4 border-white md:mt-16 md:border-8 lg:mt-20"
        />
      </picture>
    </div>

    <!--  What you get section  -->
    <div class="space-y-8 pt-16 lg:grid lg:pbe-24 lg:pt-0">
      <h1 class="font-preset-2-mobile text-custom-neutral-900 lg:text-center">What you'll get</h1>
      <div class="space-y-6 lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="space-y-5 xl:w-94">
          <IconContainer>
            <img src="/images/icon-whole-food-recipes.svg" alt="Carrot Icon" />
          </IconContainer>
          <div class="space-y-3">
            <h2 class="font-preset-3 text-custom-neutral-900">Whole-food recipes</h2>
            <p class="font-preset-6 text-custom-neutral-600">
              Each dish uses everyday, unprocessed ingredients.
            </p>
          </div>
        </div>
        <div class="space-y-5">
          <IconContainer>
            <img src="/images/icon-minimum-fuss.svg" alt="Minimum fuss Icon" />
          </IconContainer>
          <div class="space-y-3 xl:w-94">
            <h2 class="font-preset-3 text-custom-neutral-900">Minimum fuss</h2>
            <p class="font-preset-6 text-custom-neutral-600">
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </div>
        </div>
        <div class="space-y-5 xl:w-94">
          <IconContainer>
            <img src="/images/icon-search-in-seconds.svg" alt="Search in seconds Icon" />
          </IconContainer>
          <div class="space-y-3">
            <h2 class="font-preset-3 text-custom-neutral-900">Search in seconds</h2>
            <p class="font-preset-6 text-custom-neutral-600">
              Filter by name or ingredient and jump straight to the recipe you need.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-8 pt-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:py-24">
      <div class="space-y-5 lg:m-0 lg:max-w-[509px] lg:place-content-center">
        <h1 class="font-preset-2-mobile text-custom-neutral-900">Built for real life</h1>
        <p class="font-preset-6 text-custom-neutral-600">
          Cooking shouldn’t be complicated. These recipes come in under
          <span class="font-preset-5 text-custom-neutral-900">30 minutes</span> of active time, fit
          busy schedules, and taste good enough to repeat.
        </p>
        <p class="font-preset-6 text-custom-neutral-600">
          Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
        </p>
      </div>

      <picture>
        <source
          srcset="/images/image-home-real-life-large.webp"
          type="image/webp"
          media="(min-width: 1024px)"
        />
        <source
          media="(min-width: 375)"
          srcset="/images/image-home-real-life-small.webp"
          type="image/webp"
        />
        <img
          src="/images/image-home-real-life-small.webp"
          alt="Hero image"
          class="w-full rounded-lg md:mt-16 lg:mt-0"
        />
      </picture>
    </div>
    <ReadyToCook class="pt-16 lg:pt-0" />
  </AppLayout>
</template>
