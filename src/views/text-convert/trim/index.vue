<script setup lang="ts">
import { ref, watch } from 'vue';
import TextInputFunc from '@/components/common/text-input-func.vue';

const value = ref('');
const type = ref('both');

const format = () => {
  if (type.value === 'both') {
    value.value = value.value.trim();
  } else if (type.value === 'spaceAndTab') {
    value.value = value.value.replace(/[ \t]/g, '');
  } else if (type.value === 'all') {
    value.value = value.value.replace(/\s+/g, '');
  }
};

watch(value, () => {
  format();
});

watch(type, () => {
  format();
});
</script>

<template>
  <div>
    <NCard title="去除空白">
      <NFlex vertical>
        <NRadioGroup v-model:value="type" name="type">
          <NRadio value="both">前后</NRadio>
          <NRadio value="spaceAndTab">空格和制表符</NRadio>
          <NRadio value="all">全部</NRadio>
        </NRadioGroup>
        <TextInputFunc v-model:value="value" placeholder="请输入要处理的内容" />
      </NFlex>
    </NCard>
  </div>
</template>

<style scoped></style>
