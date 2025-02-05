<script setup lang="ts">
const text = `
------------------------------
soybean-admin
------------------------------
https://github.com/soybeanjs/soybean-admin
Copyright (c) 2021 Soybean (https://soybeanjs.cn/)
Licensed under MIT license
`;
</script>

<template>
  <div>
    <NCard title="开源组件许可">
      <div>开源许可</div>
      <div class="whitespace-pre-wrap">
        {{ text }}
      </div>
    </NCard>
  </div>
</template>

<style scoped></style>
