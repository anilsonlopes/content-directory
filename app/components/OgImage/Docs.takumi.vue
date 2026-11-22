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

<!-- Mesma moldura do banner do README (.github/banner.png): URL no topo, marca e rótulos no rodapé -->
<template>
  <div
    class="w-full h-full flex bg-ink-950 font-sans"
    data-theme="dark"
  >
    <div class="flex flex-col justify-between flex-1 px-20 py-14">
      <span class="flex font-mono text-xl tracking-widest text-ink-400">
        content-directory.<span class="text-labafero">quila.dev</span>
      </span>

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="44"
          height="44"
        >
          <rect
            x="5"
            y="5"
            width="22"
            height="22"
            rx="3.5"
            fill="#00c950"
            transform="rotate(45 16 16)"
          />
          <g
            fill="none"
            stroke="#fff"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12.5 9.5v13" />
            <path d="M20.5 13v1a5 5 0 0 1-5 5h-3" />
          </g>
          <g fill="#fff">
            <circle
              cx="12.5"
              cy="9.5"
              r="2.6"
            />
            <circle
              cx="12.5"
              cy="22.5"
              r="2.6"
            />
            <circle
              cx="20.5"
              cy="13"
              r="2.6"
            />
          </g>
        </svg>
        <span class="flex text-3xl font-extrabold tracking-tight text-white">
          content-<span :style="{ color: '#00c950' }">directory</span>
        </span>
        <div class="h-px flex-1 bg-ink-800" />
        <span class="font-mono text-xl uppercase tracking-widest text-ink-500">Markdown · MCP · CC0</span>
      </div>
    </div>
  </div>
</template>
