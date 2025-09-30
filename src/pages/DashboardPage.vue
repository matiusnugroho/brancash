<template>
  <section class="p-6 grid grid-cols-1 xl:grid-cols-12 gap-6 bg-white">
    <div class="xl:col-span-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <h1 class="text-2xl font-semibold tracking-tight text-slate-800">Hi, Delilah Greenway!</h1>
      <div class="flex items-center gap-2">
        <button class="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700">This week</button>
        <button class="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700">Week</button>
      </div>
    </div>

    <div class="xl:col-span-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <div class="rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm p-5">
        <div class="flex items-start justify-between text-slate-500">
          <h3 class="text-sm font-medium">Revenue</h3>
          <button class="text-slate-400 hover:text-slate-600">...</button>
        </div>
        <div class="mt-3 flex items-end gap-2">
          <p class="text-3xl font-bold text-slate-800">$5,164.5</p>
          <span class="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">+6.59%</span>
        </div>
        <p class="mt-1 text-xs text-slate-500">$4,845 last week</p>
      </div>
      <div class="rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm p-5">
        <div class="flex items-start justify-between text-slate-500">
          <h3 class="text-sm font-medium">Visitors</h3>
          <button class="text-slate-400 hover:text-slate-600">...</button>
        </div>
        <div class="mt-3 flex items-end gap-2">
          <p class="text-3xl font-bold text-slate-800">954</p>
          <span class="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">+8.29%</span>
        </div>
        <p class="mt-1 text-xs text-slate-500">881 last week</p>
      </div>
      <div class="rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm p-5">
        <div class="flex items-start justify-between text-slate-500">
          <h3 class="text-sm font-medium">Orders</h3>
          <button class="text-slate-400 hover:text-slate-600">...</button>
        </div>
        <div class="mt-3 flex items-end gap-2">
          <p class="text-3xl font-bold text-slate-800">33</p>
          <span class="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">+13.79%</span>
        </div>
        <p class="mt-1 text-xs text-slate-500">29 last week</p>
      </div>
      <div class="rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm p-5">
        <div class="flex items-start justify-between text-slate-500">
          <h3 class="text-sm font-medium">Avg. Purchase Value</h3>
          <button class="text-slate-400 hover:text-slate-600">...</button>
        </div>
        <div class="mt-3 flex items-end gap-2">
          <p class="text-3xl font-bold text-slate-800">$156.5</p>
          <span class="text-xs px-2 py-1 rounded-full bg-rose-50 text-rose-600 ring-1 ring-rose-200">-6.28%</span>
        </div>
        <p class="mt-1 text-xs text-slate-500">$167 last week</p>
      </div>
    </div>

    <div class="xl:col-span-12 grid grid-cols-1 xl:grid-cols-12 gap-6">
      <div class="xl:col-span-8 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 p-5">
        <div class="flex items-center justify-between">
          <h3 class="text-slate-800 font-semibold">Sales Overview</h3>
          <button class="text-sm text-slate-600 rounded-lg border border-slate-200 px-2 py-1">Week</button>
        </div>
        <div class="mt-4 grid grid-cols-7 gap-3 h-48 items-end">
          <div v-for="(h, i) in [75, 60, 48, 30, 85, 35, 25]" :key="i" class="bg-violet-400 rounded-md" :style="{ height: h + '%' }" />
        </div>
        <div class="mt-2 grid grid-cols-7 text-center text-xs text-slate-400">
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span>SAT</span>
          <span>SUN</span>
        </div>
      </div>

      <div class="xl:col-span-4 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 p-5">
        <div class="flex items-center justify-between">
          <h3 class="text-slate-800 font-semibold">Profit</h3>
          <button class="text-sm text-slate-600 rounded-lg border border-slate-200 px-2 py-1">Week</button>
        </div>
        <div class="mt-6 grid place-items-center">
          <svg viewBox="0 0 120 120" class="w-48 h-48">
            <circle cx="60" cy="60" r="50" stroke="#e5e7eb" stroke-width="18" fill="none" />
            <circle cx="60" cy="60" r="50" stroke="#a78bfa" stroke-width="18" fill="none" stroke-dasharray="314" stroke-dashoffset="120" stroke-linecap="round" />
            <circle cx="60" cy="60" r="50" stroke="#60a5fa" stroke-width="18" fill="none" stroke-dasharray="314" stroke-dashoffset="220" stroke-linecap="round" />
          </svg>
          <div class="-mt-28 text-center">
            <p class="text-2xl font-semibold text-slate-800">$1136</p>
          </div>
        </div>
        <ul class="mt-2 text-xs text-slate-500 space-y-1">
          <li class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-violet-400"></span>
            Accessories, 18%
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
            Sweatshirt, 44%
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            Pants, 38%
          </li>
        </ul>
      </div>
    </div>

    <div class="xl:col-span-8 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 p-0 overflow-hidden">
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
                <span class="px-2.5 py-1 rounded-full text-xs bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">Active</span>
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
        <h3 class="text-slate-800 font-semibold">Critical Stock Items</h3>
        <span class="text-xs text-slate-500">Threshold <= 10</span>
      </div>
      <ul class="space-y-3">
        <li class="flex items-center justify-between" v-for="item in criticalStocks" :key="item.name">
          <div>
            <p class="text-sm font-medium text-slate-700">{{ item.name }}</p>
            <div class="mt-1 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div class="h-full bg-red-500" :style="{ width: item.bar + '%' }"></div>
            </div>
          </div>
          <span
            :class="[
              'text-xs px-2 py-1 rounded-lg ring-1',
              item.level === 'low' ? 'bg-red-50 text-red-600 ring-red-200' : 'bg-amber-50 text-amber-700 ring-amber-200',
            ]"
          >
            Stock {{ item.stock }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>
