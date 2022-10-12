<template>
  <kui-cell title="测试标题" :show-right-icon="false">
    <template #content>
      <kui-text>自定义插槽内容</kui-text>
    </template>
  </kui-cell>
  <kui-cell title="测试标题">
    <template #right-icon>
      <kui-icons type="heart" color="red" />
    </template>
  </kui-cell>
</template>
