<script setup lang="ts">
import { useRoute } from 'vue-router'
import { nextTick, ref, watch } from 'vue'
import { menus } from '~/composables/aside'

const menuList = menus()

const route = useRoute()

const pathname = ref(window.location.pathname)

watch(() => route.path, (newPath, oldPath) => {
  nextTick(() => {
    pathname.value = newPath
  })
}, { immediate: true })
</script>

<template>
  <div class="leading-10 w-200 px-5">
    <template v-if="pathname.includes('component')">
      <ol v-for="(item, index) in menuList.component" :key="index" class="">
        <RouterLink v-if="item.link" :to="item.link">
          <span class="font-bold dark:opacity-80">
            {{ item.name }}
          </span>
        </RouterLink>
        <span v-else class="font-bold dark:opacity-80">
          {{ item.name }}
        </span>
        <ul class="py-3">
          <li
            v-for="(childItem, childIndex) in item.children" :key="childIndex"
            class="text-center px-5 rounded-full dark:opacity-80 my-2"
            :class="pathname === childItem.link ? ' bg-green1 dark:bg-green-900/50' : ''"
          >
            <RouterLink :to="childItem.link">
              <span
                class="font-bold text-sm opacity-80 dark:opacity-60"
                :class="pathname === childItem.link ? '!text-green-500' : 'text-gray-800 dark:!text-white'"
              >
                {{ childItem.name }}
              </span>
            </RouterLink>
          </li>
        </ul>
      </ol>
    </template>
  </div>
</template>
