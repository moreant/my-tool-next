<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const text = defineModel<string>('value', { required: true });
defineProps<{
  placeholder?: string;
}>();

const { copy, isSupported } = useClipboard();

async function onCopy() {
  if (!isSupported) {
    window.$message?.error('您的浏览器不支持Clipboard API');
    return;
  }

  if (!text.value) {
    window.$message?.error('请输入要复制的内容');
    return;
  }

  await copy(text.value);
  window.$message?.success(`复制成功`);
}
</script>

<template>
  <NFlex vertical>
    <NInput v-model:value="text" type="textarea" :placeholder="placeholder" />
    <NButton type="primary" @click="onCopy">复制</NButton>
  </NFlex>
</template>

<style scoped></style>
