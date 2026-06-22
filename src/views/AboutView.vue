<script setup lang="ts">
import ReadyToCook from '@/components/ReadyToCook.vue'
import AppLayout from '@/views/layouts/AppLayout.vue'
</script>
<template>
  <AppLayout>
    <!--  Our mission section  -->
    <div
      class="relative mx-auto w-full space-y-10 pb-16 lg:flex lg:max-h-150 lg:items-center lg:gap-5 xl:gap-16"
    >
      <div class="space-y-6 lg:m-0 lg:max-h-[450px] lg:max-w-[510px]">
        <p
          class="text-custom-neutral-900 font-preset-5 bg-custom-orange-500 max-w-[119px] rounded-md px-1.5 py-0.5"
        >
          Our mission
        </p>
        <h1 class="font-preset-2-mobile md:font-preset-2 text-custom-neutral-900">
          Help more people cook nourishing meals, more often.
        </h1>

        <div class="space-y-4">
          <p class="font-preset-6 text-custom-neutral-600">
            Healthy Recipe Finder was created to prove that healthy eating can be convenient,
            affordable, and genuinely delicious.
          </p>
          <p class="font-preset-6 text-custom-neutral-600">
            We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no
            ultra-processed shortcuts—just honest ingredients and straightforward steps.
          </p>
        </div>
      </div>

      <picture class="flex justify-center lg:m-0 lg:w-1/2">
        <source
          media="(max-width: 767px)"
          srcset="/images/image-about-our-mission-small.webp"
          type="image/webp"
        />
        <source srcset="/images/image-about-our-mission-large.webp" type="image/webp" />
        <img
          src="/images/image-about-our-mission-small.webp"
          alt="Brunette Woman image"
          class="rounded-3xl lg:object-contain"
        />
      </picture>
      <div
        class="absolute hidden h-20 w-20 lg:-right-8 lg:bottom-45 lg:block xl:-right-6 xl:bottom-17 xl:h-[210.44px] xl:w-[118.25px]"
      >
        <img src="/images/pattern-squiggle-2.svg" alt="Squiggle pattern" class="object-cover" />
      </div>
    </div>

    <!--  Why we exist section  -->
    <div class="w-full space-y-10 py-12 lg:grid lg:grid-cols-[372px_1fr] lg:gap-5 xl:gap-16">
      <h1 class="font-preset-2-mobile md:font-preset-2 text-custom-neutral-900">Why we exist</h1>
      <div class="space-y-12">
        <div class="grid grid-cols-[32px_1fr] gap-5">
          <div>
            <img src="/images/icon-bullet-point.svg" alt="Bullet point icon" />
          </div>
          <div class="space-y-3">
            <h2 class="font-preset-4 text-custom-neutral-900">Cut through the noice.</h2>
            <p class="font-preset-6 text-custom-neutral-600">
              The internet is bursting with recipes, yet most busy cooks still default to take-away
              or packaged foods. We curate a tight collection of fool-proof dishes so you can skip
              the scrolling and start cooking.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[32px_1fr] gap-5">
          <div>
            <img src="/images/icon-bullet-point.svg" alt="Bullet point icon" />
          </div>
          <div class="space-y-3">
            <h2 class="font-preset-4 text-custom-neutral-900">Empower home kitchens.</h2>
            <p class="font-preset-6 text-custom-neutral-600">
              When you control what goes into your meals, you control how you feel. Every recipe is
              built around unrefined ingredients and ready in about half an hour of active prep.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[32px_1fr] gap-5">
          <div>
            <img src="/images/icon-bullet-point.svg" alt="Bullet point icon" />
          </div>
          <div class="space-y-3">
            <h2 class="font-preset-4 text-custom-neutral-900">Make healthy look good.</h2>
            <p class="font-preset-6 text-custom-neutral-600">
              High-resolution imagery shows you exactly what success looks like—because we eat with
              our eyes first, and confidence matters.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--  Our food philosophy section  -->
    <div class="w-full space-y-10 py-12 lg:grid lg:grid-cols-[372px_1fr] lg:gap-5 xl:gap-16">
      <h1 class="font-preset-2-mobile md:font-preset-2 text-custom-neutral-900">
        Our food philosophy
      </h1>
      <div class="space-y-12">
        <div class="grid grid-cols-[32px_1fr] gap-5">
          <div>
            <img src="/images/icon-bullet-point.svg" alt="Bullet point icon" />
          </div>
          <div class="space-y-3">
            <h2 class="font-preset-4 text-custom-neutral-900">Whole ingredients first.</h2>
            <p class="font-preset-6 text-custom-neutral-600">
              Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every
              recipe.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[32px_1fr] gap-5">
          <div>
            <img src="/images/icon-bullet-point.svg" alt="Bullet point icon" />
          </div>
          <div class="space-y-3">
            <h2 class="font-preset-4 text-custom-neutral-900">Flavor without compromise.</h2>
            <p class="font-preset-6 text-custom-neutral-600">
              Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[32px_1fr] gap-5">
          <div>
            <img src="/images/icon-bullet-point.svg" alt="Bullet point icon" />
          </div>
          <div class="space-y-3">
            <h2 class="font-preset-4 text-custom-neutral-900">Respect for time.</h2>
            <p class="font-preset-6 text-custom-neutral-600">
              Weeknight meals should slot into real schedules; weekend cooking can be leisurely but
              never wasteful.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-[32px_1fr] gap-5">
          <div>
            <img src="/images/icon-bullet-point.svg" alt="Bullet point icon" />
          </div>
          <div class="space-y-3">
            <h2 class="font-preset-4 text-custom-neutral-900">Sustainable choices.</h2>
            <p class="font-preset-6 text-custom-neutral-600">
              Short ingredient lists cut down on food waste and carbon footprint, while
              plant-forward dishes keep things planet-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--  Beyond the plate section  -->
    <div class="space-y-12 py-12 md:pb-0 lg:flex lg:items-center lg:gap-10 xl:gap-16 xl:py-24">
      <div class="space-y-5 lg:m-0">
        <h1 class="font-preset-2-mobile md:font-preset-2 text-custom-neutral-900">
          Beyond the plate
        </h1>

        <div class="space-y-3">
          <p class="font-preset-6 text-custom-neutral-600">
            We believe food is a catalyst for community and well-being. By sharing approachable
            recipes, we hope to:
          </p>
          <ul class="pl-7">
            <li class="font-preset-6 text-custom-neutral-600 list-disc">
              Encourage family dinners and social cooking.
            </li>
            <li class="font-preset-6 text-custom-neutral-600 list-disc">
              Reduce reliance on single-use packaging and delivery waste.
            </li>
            <li class="font-preset-6 text-custom-neutral-600 list-disc">
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>
      </div>

      <picture>
        <source
          media="(max-width: 767px)"
          srcset="/images/image-about-beyond-the-plate-small.webp"
          type="image/webp"
        />
        <source srcset="/images/image-about-beyond-the-plate-large.webp" type="image/webp" />
        <img
          src="/images/image-about-beyond-the-plate-large.webp"
          alt="Families image"
          class="rounded-3xl lg:object-contain xl:min-w-186"
        />
      </picture>
    </div>

    <ReadyToCook />
  </AppLayout>
</template>
