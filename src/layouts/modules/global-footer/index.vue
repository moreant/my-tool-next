<script setup lang="ts">
defineOptions({
  name: 'GlobalFooter'
});

const buildTime = BUILD_TIME;
</script>

<template>
  <DarkModeContainer class="h-full flex-center justify-start pl-16px text-gray-400">
    build time: {{ buildTime }}
  </DarkModeContainer>
</template>

<style scoped></style>
