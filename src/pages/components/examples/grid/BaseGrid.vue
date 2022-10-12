<template>
  <kui-cell-group title="基本用法">
    <kui-grid :columns="4">
      <template v-for="i in 8" :key="i">
        <kui-grid-item icon="slideshare" text="文本" />
      </template>
    </kui-grid>
  </kui-cell-group>
</template>
