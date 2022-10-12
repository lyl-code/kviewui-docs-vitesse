<template>
  <kui-cell-group title="图标颜色大小">
    <kui-grid :columns="3" icon-color="#00BC79">
      <template v-for="i in 3" :key="i">
        <kui-grid-item icon="slideshare" :icon-color="i == 2 ? '#3491FA' : ''" :icon-size="i == 2 ? 70 : 56" text="文本" />
      </template>
    </kui-grid>
  </kui-cell-group>
</template>
