<template>
  <div class="h-300px flex justify-center items-center">
    <img
      :src="theme.avator"
      width="135"
      height="135"
      class="rounded-full border-solid border-4 border-white dark:border-[--vp-avator-border]"
    />
  </div>

  <div class="flex flex-col items-center">
    <h1 class="text-4xl mb-3">Hi, I'm Yoki Chan 🐱</h1>
    <p class="mb-3">A frontend developer corporate slave</p>
  </div>

  <div class="mx-auto max-w-3xl">
    <div class="text-3xl my-6 text-center font-bold">Blogs</div>
    <div class="relative grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
      <TransitionGroup name="fade" mode="out-in">
        <div
          v-for="item in list"
          :key="item"
          class="border-solid border-2 cursor-pointer rounded-lg shadow-2xl hover:scale-102 transition-all"
        >
          <article class="p-5.5">
            <h2
              class="text-lg truncate font-medium mb-1.5 color-[--vp-c-brand]"
            >
              {{ item.frontMatter.title }}
            </h2>
            <p>{{ item.frontMatter.date }}</p>
          </article>
        </div>
      </TransitionGroup>
    </div>

    <div class="pagination mt-10 flex justify-center relative">
      <button
        class="btn absolute left-0"
        v-show="!isFirstPage && pageCount > 1"
        @click="prev"
      >
        prev
      </button>
      <div v-show="pageCount > 1">{{ currentPage }} / {{ pageCount }}</div>
      <button
        class="btn absolute right-0"
        v-show="!isLastPage && pageCount > 1"
        @click="next"
      >
        next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOffsetPagination } from '@vueuse/core'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { theme } = useData()
const posts = computed(() => theme.value.posts)
const postLength = computed(() => theme.value.postLength)
const {
  currentPage,
  currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next
} = useOffsetPagination({ total: postLength, pageSize: 2 })

const list = computed(() => {
  const start = isFirstPage.value
    ? 0
    : (currentPage.value - 1) * currentPageSize.value
  const end = isLastPage.value
    ? postLength.value
    : start + currentPageSize.value

  return posts.value.slice(start, end)
})
</script>

<style scoped lang="scss">
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-enter-active {
  transition-delay: 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(0.01);
  transform-origin: center;
}
</style>
