<template>
  <svg :width="size" :height="size" viewBox="0 0 12 18">
    <g fill-rule="nonzero">
      <path
        :fill="color"
        d="m12 18-5.9-4.756L0 17.98V1.014C0 .745.095.487.265.297.435.107.664 0 .904 0h10.192c.24 0 .47.107.64.297.169.19.264.448.264.717V18ZM1.157 1.268v14.288l4.96-3.813 4.753 3.843V1.268H1.158Z"
      ></path>
    </g>
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
