<template>
  <kui-cell-group title="列间距">
    <kui-grid :columns="4" :gutter="30">
      <template v-for="i in 4" :key="i">
        <kui-grid-item icon="slideshare" text="文本" />
      </template>
    </kui-grid>
  </kui-cell-group>
</template>
