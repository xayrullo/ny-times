<template>
  <header
    :class="[{ 'border-b border-[#e2e2e2]': route.name === 'home' }]"
    class="bg-transparent z-10 absolute top-0 w-full"
    :style="`color: ${color}`"
  >
    <div
      :class="{ 'site-container': route.name === 'home' }"
      class="flex items-center justify-between h-[42px] py-1 px-[15px]"
    >
      <div class="flex items-center gap-2">
        <div class="cursor-pointer">
          <icon-navigation :color="color" />
        </div>
        <div class="cursor-pointer">
          <icon-search :color="color" />
        </div>
      </div>
      <div class="cursor-pointer">
        <logo :color="color" />
      </div>
      <div class="flex items-center gap-[14px]">
        <button
          class="cursor-pointer py-2 px-3 uppercase border border-[#326891] bg-[#567b95] hover:bg-[#326891] text-white text-[11px] rounded-[3px]"
        >
          Give the times
        </button>
        <button
          class="cursor-pointer flex items-center text-sm gap-1"
          :class="
            color
              ? `border border-[${color}] rounded-[3px] py-1 px-2`
              : 'border-none'
          "
        >
          Account
          <icon-bottom :color="color" />
        </button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import Logo from "@/components/extras/logo.vue";
import { computed, inject } from "vue";
import { useHeaderColor } from "@/composables/useHeaderColor";

const route = useRoute();

const color = computed(() => useHeaderColor().color.value);
</script>
