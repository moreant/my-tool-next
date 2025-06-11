<script setup lang="ts">
import { computed, ref } from 'vue';
import type { UploadFileInfo } from 'naive-ui';
import dayjs from 'dayjs';

const patten = ref('');
const replaceText = ref('');
const fileText = ref('');
const fileName = ref('');

const fileList = ref<UploadFileInfo[]>([]);

const handleUploadChange = (data: UploadFileInfo[]) => {
  let file = data[0];
  if (data.length === 2) {
    fileList.value = [data[1]];
    file = data[1];
  }

  if (!file) return;
  fileName.value = file.name;
  const reader = new FileReader();
  reader.onload = e => {
    const text = e.target?.result as string;
    fileText.value = text;
  };
  reader.readAsText(file.file as Blob);
};

const previewText = computed(() => {
  return fileText.value.replace(new RegExp(patten.value, 'g'), replaceText.value);
});

const handleDownload = () => {
  const result = fileText.value.replace(new RegExp(patten.value, 'g'), replaceText.value);
  const blob = new Blob([result], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${dayjs().format('YYYY-MM-DD HH:mm:ss')}-replace-${fileName.value}`;
  a.click();
};

const handleReset = () => {
  patten.value = '';
  replaceText.value = '';
  fileText.value = '';
  fileList.value = [];
};
</script>

<template>
  <div>
    <NCard title="替换文件中的文本">
      <template #header-extra>
        <NSpace>
          <NButton @click="handleReset">重置</NButton>
          <NButton type="primary" :disabled="!fileText" @click="handleDownload">下载</NButton>
        </NSpace>
      </template>

      <NUpload
        v-model:file-list="fileList"
        directory-dnd
        :default-upload="false"
        @update:file-list="handleUploadChange"
      >
        <NUploadDragger>
          <div class="mb-3">
            <NIcon size="48" :depth="3">
              <SvgIcon icon="mdi:archive-arrow-down-outline" />
            </NIcon>
          </div>
          <NText class="text-lg">点击或者拖动文件到该区域来上传</NText>
        </NUploadDragger>
      </NUpload>
    </NCard>

    <NGrid x-gap="12" :cols="2" class="mt-3">
      <NGi>
        <NCard title="原始文本">
          <NInput v-model:value="patten" type="textarea" placeholder="匹配文本" class="mb-3" />
          {{ fileText.substring(0, 2000) }}
        </NCard>
      </NGi>
      <NGi>
        <NCard title="结果文本">
          <NInput v-model:value="replaceText" type="textarea" placeholder="替换文本" class="mb-3" />
          {{ previewText.substring(0, 2000) }}
        </NCard>
      </NGi>
    </NGrid>
  </div>
</template>

<style scoped></style>
