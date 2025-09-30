<template>
  <div class="h-screen w-full bg-white">
    <div class="flex h-full w-full overflow-hidden">
      <DashboardSidebar
        :nav-items="navItems"
        :is-expanded="isSidebarExpanded"
        :is-mobile-open="isMobileOpen"
        @toggle="toggleSidebar"
        @close-mobile="closeMobile"
      />
      <div class="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader class="sticky top-0 z-20" @open-mobile="openMobile" />
        <main class="flex-1 overflow-y-auto bg-white">
          <RouterView />
        </main>
        <DashboardFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'

import DashboardFooter from '@/components/dashboard/DashboardFooter.vue'
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue'

const navItems: { label: string; paths: string[] }[] = [
  {
    label: 'Dashboard',
    paths: [
      'M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 1-1.06 1.06l-.94-.94V20.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5h-3v4.5a.75.75 0 0 1-.75.75H6.5a.75.75 0 0 1-.75-.75v-7.85l-.94.94a.75.75 0 1 1-1.06-1.06l8.69-8.69Z',
    ],
  },
  {
    label: 'Catalog',
    paths: [
      'M4.5 6A2.25 2.25 0 0 1 6.75 3.75h10.5A2.25 2.25 0 0 1 19.5 6v1.5H4.5V6ZM4.5 9h15v8.25A2.25 2.25 0 0 1 17.25 19.5H6.75A2.25 2.25 0 0 1 4.5 17.25V9Zm4.875 2.25a.75.75 0 0 0-1.5 0v5.25a.75.75 0 0 0 1.5 0v-5.25Zm5.25 0a.75.75 0 0 0-1.5 0v5.25a.75.75 0 0 0 1.5 0v-5.25Z',
    ],
  },
  {
    label: 'Orders',
    paths: [
      'M2.25 6.75A.75.75 0 0 1 3 6h18a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-2.5Zm0 7A.75.75 0 0 1 3 13h18a.75.75 0 0 1 .75.75v2.5A.75.75 0 0 1 21 19H3a.75.75 0 0 1-.75-.75v-2.5Z',
    ],
  },
  {
    label: 'Media',
    paths: [
      'M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM11.25 7.5a.75.75 0 0 1 1.5 0v4.19l2.28 2.28a.75.75 0 0 1-1.06 1.06l-2.47-2.47A.75.75 0 0 1 11.25 12V7.5Z',
    ],
  },
  {
    label: 'Audience',
    paths: [
      'M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z',
      'M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Z',
    ],
  },
  {
    label: 'Settings',
    paths: [
      'M10.5 3.75A.75.75 0 0 1 11.25 3h1.5a.75.75 0 0 1 .75.75V6h2.25a.75.75 0 0 1 .53 1.28l-2.1 2.1a6 6 0 1 1-1.06-1.06l2.1-2.1A.75.75 0 0 1 16.5 6H14V3.75Z',
    ],
  },
]

const isSidebarExpanded = ref(false)
const isMobileOpen = ref(false)

const toggleSidebar = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value
}

const openMobile = () => {
  isMobileOpen.value = true
  document.body.classList.add('overflow-hidden')
}

const closeMobile = () => {
  isMobileOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileOpen.value) {
    closeMobile()
  }
}

onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>
