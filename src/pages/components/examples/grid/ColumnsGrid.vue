<template>
  <kui-cell-group title="自定义列数">
    <kui-grid :columns="3">
      <template v-for="i in 3" :key="i">
        <kui-grid-item icon="slideshare" text="文本" />
      </template>
    </kui-grid>
  </kui-cell-group>
</template>
