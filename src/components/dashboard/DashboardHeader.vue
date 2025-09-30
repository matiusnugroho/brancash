<template>
  <header class="flex items-center justify-between p-6 border-b border-slate-100 bg-white">
    <div class="flex items-center gap-3">
      <button
        class="md:hidden w-9 h-9 grid place-items-center rounded-xl hover:bg-slate-50"
        title="Menu"
        @click="emit('open-mobile')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h10" />
        </svg>
      </button>
      <h2 class="text-sm text-slate-500">ANKA Store</h2>
      <button class="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-slate-800 rounded-lg px-2 py-1 hover:bg-slate-50">
        Dashboard
        <svg class="w-4 h-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="flex items-center gap-3">
      <div class="hidden md:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
        <svg class="w-5 h-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-5.2-5.2M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
        </svg>
        <input type="text" placeholder="Search" class="outline-none text-sm placeholder:text-slate-400" />
      </div>
      <button class="w-9 h-9 grid place-items-center rounded-xl hover:bg-slate-50 text-slate-500" title="Notifications">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
          <path d="M12 2.25a6.75 6.75 0 0 0-6.75 6.75v3.318l-1.3 2.602A1.5 1.5 0 0 0 5.25 17.25h13.5a1.5 1.5 0 0 0 1.35-2.08l-1.35-2.702V9A6.75 6.75 0 0 0 12 2.25Zm0 19.5a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3Z" />
        </svg>
      </button>
      <button class="w-9 h-9 grid place-items-center rounded-xl hover:bg-slate-50 text-slate-500" title="Help">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
          <path
            d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.25Zm.75 15a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0V17.25Zm2.52-6.27a2.97 2.97 0 0 1-1.77 2.7c-.38.18-.5.32-.5.57v.45a.75.75 0 0 1-1.5 0v-.45c0-.98.6-1.56 1.23-1.86a1.47 1.47 0 1 0-2.23-1.26.75.75 0 0 1-1.5 0 2.97 2.97 0 1 1 6 0Z"
          />
        </svg>
      </button>
      <div class="w-9 h-9 rounded-full bg-slate-200 overflow-hidden grid place-items-center">DG</div>
    </div>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'open-mobile'): void
}>()
</script>
