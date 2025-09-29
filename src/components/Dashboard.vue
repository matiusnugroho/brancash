<template>
  <div class="min-h-screen bg-violet-50">
    <div class="min-h-screen w-full">
      <div class="bg-white min-h-screen w-full">
        <div class="flex min-h-screen w-full">
          <!-- Desktop Sidebar -->
          <aside
            id="sidebar"
            :class="[
              'hidden md:flex flex-col gap-4 items-stretch py-6 bg-white border-r border-slate-100 transition-all duration-200',
              isSidebarExpanded ? 'w-64' : 'w-20',
            ]"
          >
            <!-- Brand + Toggle -->
            <div class="px-3 flex items-center justify-between">
              <div
                class="w-9 h-9 rounded-lg bg-violet-600 text-white grid place-items-center font-bold"
              >
                SD
              </div>
              <button
                class="ml-2 w-8 h-8 grid place-items-center rounded-lg text-slate-400 hover:bg-slate-50"
                title="Expand"
                @click="toggleSidebar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    d="M3.75 5.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6.56l3.72 3.72a.75.75 0 1 1-1.06 1.06L5.5 7.81v5.69a.75.75 0 0 1-1.5 0V5.25Zm16.5 13.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1 0-1.5h5.44l-3.72-3.72a.75.75 0 1 1 1.06-1.06l3.72 3.72V6.75a.75.75 0 0 1 1.5 0v12Z"
                  />
                </svg>
              </button>
            </div>

            <!-- Nav -->
            <nav class="mt-2 flex-1">
              <ul class="px-2 space-y-1 text-slate-600">
                <li v-for="item in navItems" :key="item.label">
                  <a
                    href="#"
                    :class="[
                      'flex items-center gap-3 rounded-xl hover:bg-violet-50 hover:text-violet-700 w-full py-2',
                      isSidebarExpanded ? 'justify-start px-3' : 'justify-center px-2',
                    ]"
                  >
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path v-for="(d, i) in item.paths" :key="i" :d="d" />
                    </svg>
                    <span v-show="isSidebarExpanded" class="whitespace-nowrap">{{
                      item.label
                    }}</span>
                  </a>
                </li>
              </ul>
            </nav>

            <!-- CTA -->
            <div class="px-3 mt-auto">
              <button
                class="w-full flex items-center justify-between gap-2 rounded-2xl bg-violet-600 text-white px-4 py-2"
              >
                <span v-show="isSidebarExpanded">Add</span>
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.75v5.75a.75.75 0 0 1-1.5 0V12.5H5.5a.75.75 0 0 1 0-1.5h5.75V5.25A.75.75 0 0 1 12 4.5Z"
                  />
                </svg>
              </button>
            </div>
          </aside>

          <!-- Mobile Sidebar (drawer) -->
          <div v-show="isMobileOpen" class="fixed inset-0 z-50 md:hidden">
            <div class="absolute inset-0 bg-slate-900/40" @click="closeMobile" />
            <div
              class="absolute left-0 top-0 h-full w-72 bg-white p-4 shadow-2xl flex flex-col transform transition-transform duration-200"
              :class="isMobileOpen ? 'translate-x-0' : '-translate-x-full'"
            >
              <div class="flex items-center justify-between mb-4">
                <div
                  class="w-9 h-9 rounded-lg bg-violet-600 text-white grid place-items-center font-bold"
                >
                  SD
                </div>
                <button
                  class="w-9 h-9 grid place-items-center rounded-xl hover:bg-slate-50"
                  title="Close"
                  @click="closeMobile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M6.225 4.811a.75.75 0 0 1 1.06 0L12 9.525l4.715-4.714a.75.75 0 1 1 1.06 1.06L13.06 10.586l4.715 4.714a.75.75 0 1 1-1.06 1.06L12 11.646l-4.715 4.714a.75.75 0 1 1-1.06-1.06l4.714-4.715-4.714-4.715a.75.75 0 0 1 0-1.06Z"
                    />
                  </svg>
                </button>
              </div>
              <nav class="flex-1">
                <ul class="space-y-1 text-slate-700">
                  <li v-for="item in navItems" :key="item.label + '-m'">
                    <a
                      href="#"
                      class="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-violet-50 hover:text-violet-700"
                    >
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path v-for="(d, i) in item.paths" :key="i" :d="d" />
                      </svg>
                      {{ item.label }}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <!-- Main -->
          <div class="flex-1">
            <!-- Header -->
            <header
              class="flex items-center justify-between p-6 border-b border-slate-100 bg-white"
            >
              <div class="flex items-center gap-3">
                <button
                  class="md:hidden w-9 h-9 grid place-items-center rounded-xl hover:bg-slate-50"
                  title="Menu"
                  @click="openMobile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-slate-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h10" />
                  </svg>
                </button>
                <h2 class="text-sm text-slate-500">ANKA Store</h2>
                <button
                  class="inline-flex items-center gap-1 text-sm font-medium text-slate-800 rounded-lg px-2 py-1 hover:bg-slate-50"
                >
                  Dashboard
                  <svg
                    class="w-4 h-4 text-slate-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="hidden md:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2"
                >
                  <svg
                    class="w-5 h-5 text-slate-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m21 21-5.2-5.2M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    class="outline-none text-sm placeholder:text-slate-400"
                  />
                </div>
                <button
                  class="w-9 h-9 grid place-items-center rounded-xl hover:bg-slate-50 text-slate-500"
                  title="Notifications"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      d="M12 2.25a6.75 6.75 0 0 0-6.75 6.75v3.318l-1.3 2.602A1.5 1.5 0 0 0 5.25 17.25h13.5a1.5 1.5 0 0 0 1.35-2.08l-1.35-2.702V9A6.75 6.75 0 0 0 12 2.25Zm0 19.5a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3Z"
                    />
                  </svg>
                </button>
                <button
                  class="w-9 h-9 grid place-items-center rounded-xl hover:bg-slate-50 text-slate-500"
                  title="Help"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.25Zm.75 15a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0V17.25Zm2.52-6.27a2.97 2.97 0 0 1-1.77 2.7c-.38.18-.5.32-.5.57v.45a.75.75 0 0 1-1.5 0v-.45c0-.98.6-1.56 1.23-1.86a1.47 1.47 0 1 0-2.23-1.26.75.75 0 0 1-1.5 0 2.97 2.97 0 1 1 6 0Z"
                    />
                  </svg>
                </button>
                <div
                  class="w-9 h-9 rounded-full bg-slate-200 overflow-hidden grid place-items-center"
                >
                  DG
                </div>
              </div>
            </header>

            <!-- Content -->
            <section class="p-6 grid grid-cols-1 xl:grid-cols-12 gap-6 bg-white">
              <!-- Greeting + period filter -->
              <div
                class="xl:col-span-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <h1 class="text-2xl font-semibold tracking-tight text-slate-800">
                  Hi, Delilah Greenway!
                </h1>
                <div class="flex items-center gap-2">
                  <button
                    class="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700"
                  >
                    This week
                  </button>
                  <button
                    class="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700"
                  >
                    Week ▾
                  </button>
                </div>
              </div>

              <!-- KPI row -->
              <div class="xl:col-span-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                <div class="rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm p-5">
                  <div class="flex items-start justify-between text-slate-500">
                    <h3 class="text-sm font-medium">Revenue</h3>
                    <button class="text-slate-400 hover:text-slate-600">⋯</button>
                  </div>
                  <div class="mt-3 flex items-end gap-2">
                    <p class="text-3xl font-bold text-slate-800">$5,164.5</p>
                    <span
                      class="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
                      >+6.59%</span
                    >
                  </div>
                  <p class="mt-1 text-xs text-slate-500">$4,845 last week</p>
                </div>
                <div class="rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm p-5">
                  <div class="flex items-start justify-between text-slate-500">
                    <h3 class="text-sm font-medium">Visitors</h3>
                    <button class="text-slate-400 hover:text-slate-600">⋯</button>
                  </div>
                  <div class="mt-3 flex items-end gap-2">
                    <p class="text-3xl font-bold text-slate-800">954</p>
                    <span
                      class="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
                      >+8.29%</span
                    >
                  </div>
                  <p class="mt-1 text-xs text-slate-500">881 last week</p>
                </div>
                <div class="rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm p-5">
                  <div class="flex items-start justify-between text-slate-500">
                    <h3 class="text-sm font-medium">Orders</h3>
                    <button class="text-slate-400 hover:text-slate-600">⋯</button>
                  </div>
                  <div class="mt-3 flex items-end gap-2">
                    <p class="text-3xl font-bold text-slate-800">33</p>
                    <span
                      class="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
                      >+13.79%</span
                    >
                  </div>
                  <p class="mt-1 text-xs text-slate-500">29 last week</p>
                </div>
                <div class="rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm p-5">
                  <div class="flex items-start justify-between text-slate-500">
                    <h3 class="text-sm font-medium">Avg. Purchase Value</h3>
                    <button class="text-slate-400 hover:text-slate-600">⋯</button>
                  </div>
                  <div class="mt-3 flex items-end gap-2">
                    <p class="text-3xl font-bold text-slate-800">$156.5</p>
                    <span
                      class="text-xs px-2 py-1 rounded-full bg-rose-50 text-rose-600 ring-1 ring-rose-200"
                      >-6.28%</span
                    >
                  </div>
                  <p class="mt-1 text-xs text-slate-500">$167 last week</p>
                </div>
              </div>

              <!-- Chart + Profit -->
              <div class="xl:col-span-12 grid grid-cols-1 xl:grid-cols-12 gap-6">
                <!-- Sales Overview (bar) -->
                <div class="xl:col-span-8 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 p-5">
                  <div class="flex items-center justify-between">
                    <h3 class="text-slate-800 font-semibold">Sales Overview</h3>
                    <button
                      class="text-sm text-slate-600 rounded-lg border border-slate-200 px-2 py-1"
                    >
                      Week ▾
                    </button>
                  </div>
                  <div class="mt-4 grid grid-cols-7 gap-3 h-48 items-end">
                    <div
                      v-for="(h, i) in [75, 60, 48, 30, 85, 35, 25]"
                      :key="i"
                      class="bg-violet-400 rounded-md"
                      :style="{ height: h + '%' }"
                    />
                  </div>
                  <div class="mt-2 grid grid-cols-7 text-center text-xs text-slate-400">
                    <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span
                    ><span>SAT</span><span>SUN</span>
                  </div>
                </div>

                <!-- Profit donut placeholder -->
                <div class="xl:col-span-4 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 p-5">
                  <div class="flex items-center justify-between">
                    <h3 class="text-slate-800 font-semibold">Profit</h3>
                    <button
                      class="text-sm text-slate-600 rounded-lg border border-slate-200 px-2 py-1"
                    >
                      Week ▾
                    </button>
                  </div>
                  <div class="mt-6 grid place-items-center">
                    <svg viewBox="0 0 120 120" class="w-48 h-48">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="#e5e7eb"
                        stroke-width="18"
                        fill="none"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="#a78bfa"
                        stroke-width="18"
                        fill="none"
                        stroke-dasharray="314"
                        stroke-dashoffset="120"
                        stroke-linecap="round"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="#60a5fa"
                        stroke-width="18"
                        fill="none"
                        stroke-dasharray="314"
                        stroke-dashoffset="220"
                        stroke-linecap="round"
                      />
                    </svg>
                    <div class="-mt-28 text-center">
                      <p class="text-2xl font-semibold text-slate-800">$1136</p>
                    </div>
                  </div>
                  <ul class="mt-2 text-xs text-slate-500 space-y-1">
                    <li class="flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full bg-violet-400"></span> Accessories, 18%
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span> Sweatshirt, 44%
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full bg-slate-300"></span> Pants, 38%
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Bottom row: Products + Critical Stock -->
              <div
                class="xl:col-span-8 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 p-0 overflow-hidden"
              >
                <div class="px-5 pt-5 pb-3">
                  <h3 class="text-slate-800 font-semibold">Products</h3>
                </div>
                <div class="overflow-x-auto">
                  <table class="min-w-full text-sm">
                    <thead class="bg-slate-50 text-slate-500">
                      <tr class="text-left">
                        <th class="py-3 pl-5 pr-3 font-medium">No</th>
                        <th class="py-3 px-3 font-medium">Product</th>
                        <th class="py-3 px-3 font-medium">Status</th>
                        <th class="py-3 px-3 font-medium">Sold</th>
                        <th class="py-3 px-3 font-medium">View</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 text-slate-700">
                      <tr class="hover:bg-slate-50/60" v-for="row in rows" :key="row.no">
                        <td class="py-4 pl-5 pr-3">{{ row.no }}</td>
                        <td class="py-4 px-3">
                          <div class="flex items-center gap-3">
                            <img :src="row.img" class="w-9 h-9 rounded-md object-cover" alt="" />
                            <span>{{ row.product }}</span>
                          </div>
                        </td>
                        <td class="py-4 px-3">
                          <span
                            class="px-2.5 py-1 rounded-full text-xs bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
                            >Active</span
                          >
                        </td>
                        <td class="py-4 px-3">{{ row.sold }}</td>
                        <td class="py-4 px-3">{{ row.view }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="xl:col-span-4 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 p-5">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-slate-800 font-semibold">Stok Item Kritis</h3>
                  <span class="text-xs text-slate-500">Threshold <= 10</span>
                </div>
                <ul class="space-y-3">
                  <li
                    class="flex items-center justify-between"
                    v-for="item in criticalStocks"
                    :key="item.name"
                  >
                    <div>
                      <p class="text-sm font-medium text-slate-700">{{ item.name }}</p>
                      <div class="mt-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div class="h-full bg-red-500" :style="{ width: item.bar + '%' }"></div>
                      </div>
                    </div>
                    <span
                      :class="[
                        'text-xs px-2 py-1 rounded-lg ring-1',
                        item.level === 'low'
                          ? 'bg-red-50 text-red-600 ring-red-200'
                          : 'bg-amber-50 text-amber-700 ring-amber-200',
                      ]"
                      >Stok {{ item.stock }}</span
                    >
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isSidebarExpanded = ref(false)
const isMobileOpen = ref(false)

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

const rows = [
  {
    no: 1,
    product: 'Mobile Phones',
    sold: '05',
    view: '320',
    img: 'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?q=80&w=120&auto=format&fit=crop',
  },
  {
    no: 2,
    product: 'Apple Laptops',
    sold: '06',
    view: '150',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=120&auto=format&fit=crop',
  },
  {
    no: 3,
    product: 'Windows Laptops',
    sold: '04',
    view: '250',
    img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=120&auto=format&fit=crop',
  },
  {
    no: 4,
    product: 'Head Phones',
    sold: '09',
    view: '160',
    img: 'https://images.unsplash.com/photo-1518442072090-05fcd3e0f4a5?q=80&w=120&auto=format&fit=crop',
  },
]

const criticalStocks = [
  { name: 'USB-C Cable 1m', stock: 8, bar: 20, level: 'low' as const },
  { name: 'iPhone Case', stock: 14, bar: 35, level: 'warn' as const },
  { name: 'Wireless Mouse', stock: 11, bar: 28, level: 'low' as const },
]

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
  if (e.key === 'Escape' && isMobileOpen.value) closeMobile()
}

onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>

<style scoped>
/* no extra styles */
</style>

