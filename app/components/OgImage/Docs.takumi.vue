<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

defineProps<{
  headline?: string
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    class="w-full h-full flex bg-ink-950 relative overflow-hidden"
    data-theme="dark"
  >
    <div class="absolute top-0 left-0 w-1.5 h-full bg-labafero" />

    <div class="flex flex-col justify-between flex-1 px-20 py-16">
      <div />

      <div class="flex flex-col gap-5">
        <span
          v-if="headline"
          class="font-mono text-2xl font-medium uppercase tracking-widest text-labafero"
        >
          {{ headline }}
        </span>

        <h1
          v-if="title"
          class="text-6xl font-extrabold tracking-tight text-white"
        >
          {{ title }}
        </h1>

        <p
          v-if="description"
          class="text-3xl/11 text-ink-400"
          :style="{ lineClamp: 2, textOverflow: 'ellipsis' }"
        >
          {{ description }}
        </p>
      </div>

      <div class="flex items-center gap-4">
        <span class="flex text-2xl font-bold tracking-tight text-white">
          content-<span class="text-labafero">directory</span>
        </span>
        <div class="h-px flex-1 bg-ink-800" />
        <span class="font-mono text-xl uppercase tracking-wider text-ink-500">content-directory.quila.dev</span>
      </div>
    </div>
  </div>
</template>
