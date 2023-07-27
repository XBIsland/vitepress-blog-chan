<template>
  <div>Archives</div>

  <!-- <div v-for=""></div> -->
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../.vitepress/theme/utils'

const { theme, frontmatter } = useData()

const data = computed(() => useYearSort(theme.value.posts))

// console.log(theme.value)
console.log(data.value)
</script>

<style scoped></style>
