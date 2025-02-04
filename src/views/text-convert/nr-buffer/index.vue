<script setup lang="ts">
import { computed, ref } from 'vue';
import TextInputFunc from './modules/text-input-func.vue';

// nodered Buffer 转十六进制
const nrVal = ref('[1,70,0,1,0,1,2,0,123,98,180]');
const nrValHex = computed(() => {
  if (!nrVal.value) return '';

  return nrVal.value
    .replaceAll('[', '')
    .replaceAll(']', '')
    .split(',')
    .map(item => {
      const hex = Number.parseInt(item, 10).toString(16).toUpperCase();
      return hex.length === 1 ? `0${hex}` : hex;
    })
    .join(' ');
});

// 十六进制转nodered Buffer
const hexVal = ref('01 46 00 01 00 01 02 00 7B 62 B4');
const hexValDec = computed(() => {
  if (!hexVal.value) return '';

  const dec = hexVal.value
    .split(' ')
    .map(item => {
      return Number.parseInt(item, 16);
    })
    .join(',');

  return `[${dec}]`;
});
</script>

<template>
  <div>
    <NSpace vertical>
      <NCard title="Node-RED Buffer 转十六进制">
        <NGrid x-gap="24" :cols="2">
          <NGi>
            <TextInputFunc v-model:value="nrVal" />
          </NGi>
          <NGi>
            <TextInputFunc v-model:value="nrValHex" />
          </NGi>
        </NGrid>
      </NCard>
      <NCard title="十六进制转 Node-RED Buffer">
        <NGrid x-gap="24" :cols="2">
          <NGi>
            <TextInputFunc v-model:value="hexVal" />
          </NGi>
          <NGi>
            <TextInputFunc v-model:value="hexValDec" />
          </NGi>
        </NGrid>
      </NCard>
    </NSpace>
  </div>
</template>

<style scoped></style>
