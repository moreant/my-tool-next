<script setup lang="ts">
import { Base64 } from 'js-base64';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const inputValue = ref('');

const route = useRoute();

const s = route.query.s as string;

inputValue.value = Base64.decode(s);
</script>

<template>
  <div>
    <NCard title="JetBrains Maple Mono Playground">
      <NInput v-model:value="inputValue" type="textarea" placeholder="" />
      <NDivider />
      <div class="whitespace-pre-wrap">
        {{ inputValue }}
      </div>
    </NCard>
  </div>
</template>

<style scoped></style>
