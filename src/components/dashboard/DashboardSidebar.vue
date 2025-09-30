<template>
  <aside
    id="sidebar"
    :class="[
      'hidden md:flex flex-col gap-4 items-stretch py-6 bg-white border-r border-slate-100 transition-all duration-200',
      isExpanded ? 'w-64' : 'w-20',
    ]"
  >
    <div class="px-3 flex items-center justify-between">
      <div class="w-9 h-9 rounded-lg bg-violet-600 text-white grid place-items-center font-bold">
        SD
      </div>
      <button
        class="ml-2 w-8 h-8 grid place-items-center rounded-lg text-slate-400 hover:bg-slate-50"
        title="Expand"
        @click="emit('toggle')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
          <path
            d="M3.75 5.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6.56l3.72 3.72a.75.75 0 1 1-1.06 1.06L5.5 7.81v5.69a.75.75 0 0 1-1.5 0V5.25Zm16.5 13.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1 0-1.5h5.44l-3.72-3.72a.75.75 0 1 1 1.06-1.06l3.72 3.72V6.75a.75.75 0 0 1 1.5 0v12Z"
          />
        </svg>
      </button>
    </div>

    <nav class="mt-2 flex-1">
      <ul class="px-2 space-y-1 text-slate-600">
        <li v-for="item in navItems" :key="item.label">
          <a
            href="#"
            :class="[
              'flex items-center gap-3 rounded-xl hover:bg-violet-50 hover:text-violet-700 w-full py-2',
              isExpanded ? 'justify-start px-3' : 'justify-center px-2',
            ]"
          >
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path v-for="(d, i) in item.paths" :key="i" :d="d" />
            </svg>
            <span v-show="isExpanded" class="whitespace-nowrap">{{ item.label }}</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="px-3 mt-auto">
      <button class="w-full flex items-center justify-between gap-2 rounded-2xl bg-violet-600 text-white px-4 py-2">
        <span v-show="isExpanded">Add</span>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.75v5.75a.75.75 0 0 1-1.5 0V12.5H5.5a.75.75 0 0 1 0-1.5h5.75V5.25A.75.75 0 0 1 12 4.5Z" />
        </svg>
      </button>
    </div>
  </aside>

  <div v-show="isMobileOpen" class="fixed inset-0 z-50 md:hidden">
    <div class="absolute inset-0 bg-slate-900/40" @click="emit('close-mobile')" />
    <div
      class="absolute left-0 top-0 h-full w-72 bg-white p-4 shadow-2xl flex flex-col transform transition-transform duration-200"
      :class="isMobileOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex items-center justify-between mb-4">
        <div class="w-9 h-9 rounded-lg bg-violet-600 text-white grid place-items-center font-bold">SD</div>
        <button class="w-9 h-9 grid place-items-center rounded-xl hover:bg-slate-50" title="Close" @click="emit('close-mobile')">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M6.225 4.811a.75.75 0 0 1 1.06 0L12 9.525l4.715-4.714a.75.75 0 1 1 1.06 1.06L13.06 10.586l4.715 4.714a.75.75 0 1 1-1.06 1.06L12 11.646l-4.715 4.714a.75.75 0 1 1-1.06-1.06l4.714-4.715-4.714-4.715a.75.75 0 0 1 0-1.06Z"
            />
          </svg>
        </button>
      </div>
      <nav class="flex-1">
        <ul class="space-y-1 text-slate-700">
          <li v-for="item in navItems" :key="`${item.label}-mobile`">
            <a
              href="#"
              class="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-violet-50 hover:text-violet-700"
              @click="emit('close-mobile')"
            >
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path v-for="(d, i) in item.paths" :key="i" :d="d" />
              </svg>
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
      <button class="mt-auto w-full flex items-center justify-between gap-2 rounded-2xl bg-violet-600 text-white px-4 py-2">
        Add
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.75v5.75a.75.75 0 0 1-1.5 0V12.5H5.5a.75.75 0 0 1 0-1.5h5.75V5.25A.75.75 0 0 1 12 4.5Z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  navItems: { label: string; paths: string[] }[]
  isExpanded: boolean
  isMobileOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle'): void
  (e: 'close-mobile'): void
}>()
</script>
