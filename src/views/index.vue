<template>
  <div class="site-container">
    <div class="mt-[15px] flex items-center justify-center">
      <div>
        <div v-for="item in newsData">
          <news :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import News from "@/components/cards/news.vue";
import { news as newsData } from "@/mocks/news";
</script>

<style scoped></style>
