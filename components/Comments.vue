<template>
  <div ref="utterancesRef"></div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { nextTick, onMounted, ref } from 'vue'

const { theme, isDark } = useData()
const utterancesRef = ref()

onMounted(() => {
  nextTick(() => {
    const { repo, src } = theme.value.comment
    if (repo) {
      const el = document.createElement('script')
      el.async = true
      el.src = src
      el.setAttribute('repo', repo)
      el.setAttribute('issue-term', 'pathname')
      el.setAttribute('theme', isDark.value ? 'github-dark' : 'github-light')
      el.setAttribute('crossorigin', 'anonymous')

      utterancesRef.value.appendChild(el)
    }
  })
})
</script>

<style scoped></style>
