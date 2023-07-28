<template>
  <Layout>
    <!-- <template #aside-top> aside-top </template>
    <template #aside-bottom> aside-bottom </template>
    <template #aside-outline-before> aside-outline-before </template>
    <template #aside-outline-after> aside-outline-after </template>
    <template #aside-ads-before> aside-ads-before </template>
    <template #aside-ads-after> aside-ads-after </template> -->
    <!-- Home slot-->
    <template #home-hero-before>
      <HomeHero />
      <!-- <div class="h-300px flex justify-center items-center">
        <img
          :src="theme.avator"
          width="135"
          height="135"
          class="rounded-full border-solid border-4 border-white dark:border-[--vp-avator-border]"
        />
      </div> -->
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeHero from '../HomeHero.vue'
const { Layout } = DefaultTheme

const { theme } = useData()
console.log(theme.value)
</script>

<style scoped></style>
