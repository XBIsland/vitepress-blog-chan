<template>
  <div v-for="yearList in data">
    <div class="font-serif text-2xl mb-2">
      {{ dayjs(yearList[0].frontMatter.date).year() }}
    </div>

    <div
      v-for="(item, index) in yearList"
      class="ml-8 transition-all hover:translate-x-6"
    >
      <a :href="withBase(item.regularPath)" :key="index">
        <div class="flex justify-between mb-1.5">
          <span>{{ item.frontMatter.title }}</span>
          <span class="font-serif">{{
            dayjs(item.frontMatter.date).format('MM-DD')
          }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../.vitepress/theme/utils'
import dayjs from 'dayjs'

const { theme } = useData()

const data = computed(() => useYearSort(theme.value.posts))
</script>

<style scoped></style>
