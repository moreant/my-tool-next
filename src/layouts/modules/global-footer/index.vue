<script setup lang="ts">
defineOptions({
  name: 'GlobalFooter'
});

const buildTime = BUILD_TIME;
const version = VERSION;
</script>

<template>
  <DarkModeContainer class="h-full flex-center justify-start pl-16px text-gray-400">
    v{{ version }}@{{ buildTime }}
  </DarkModeContainer>
</template>

<style scoped></style>
