<template>
  <div class="flex items-start">
    <div class="min-w-[125px] text-[#999] text-[11px]">
      {{ data.createdAt }}
    </div>
    <div class="flex items-center gap-4">
      <div class="w-[470px]">
        <div class="uppercase text-[11px] font-medium mb-[5px]">
          {{ data.category }}
        </div>
        <router-link :to="`/news/${data.slug}`">
          <p class="text-[23px] text-black">
            {{ data.title }}
          </p>
          <p class="text-sm text-[#333]">{{ data.description }}</p>
          <p class="text-[12px] text-[#333]">{{ data.owner }}</p>
        </router-link>
      </div>
      <img :src="data.image" :alt="data.title" class="w-[205px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INews } from "@/types/news";

interface IProps {
  data: INews;
}

defineProps<IProps>();
</script>
