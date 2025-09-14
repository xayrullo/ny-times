<template>
  <header class="flex items-center justify-between h-[42px] py-1 px-[15px]">
    <div class="flex items-center gap-2">
      <div class="cursor-pointer">
        <icon-navigation />
      </div>
      <div class="cursor-pointer">
        <icon-search />
      </div>
    </div>
    <div class="cursor-pointer">
      <logo />
    </div>
    <div class="flex items-center gap-[14px]">
      <button
        class="cursor-pointer py-2 px-3 uppercase border border-[#326891] bg-[#567b95] hover:bg-[#326891] text-white text-[11px] rounded-[3px]"
      >
        Give the times
      </button>
      <button
        class="cursor-pointer flex items-center border-none text-sm gap-1 py-2 px-[9px]"
      >
        Account
        <icon-bottom />
      </button>
    </div>
  </header>
</template>
<script setup lang="ts">
import Logo from "@/components/extras/logo.vue";
</script>
