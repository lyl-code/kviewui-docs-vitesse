<template>
  <kui-cell-group title="内容反向">
    <kui-grid :columns="4" reverse>
      <template v-for="i in 4" :key="i">
        <kui-grid-item icon="slideshare" text="文本" />
      </template>
    </kui-grid>
  </kui-cell-group>
</template>
