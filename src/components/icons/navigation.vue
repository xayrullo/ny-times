<template>
  <svg aria-hidden="true" :width="size" :height="size" viewBox="0 0 16 16">
    <rect x="1" y="3" :fill="color" width="14" height="2"></rect>
    <rect x="1" y="7" :fill="color" width="14" height="2"></rect>
    <rect x="1" y="11" :fill="color" width="14" height="2"></rect>
  </svg>
</template>

<script setup lang="ts">
interface IProps {
  size?: number | string;
  color?: string;
}

withDefaults(defineProps<IProps>(), {
  size: 16,
  color: "#1E1E1E",
});
</script>
