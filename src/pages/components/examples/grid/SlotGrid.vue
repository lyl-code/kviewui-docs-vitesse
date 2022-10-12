<template>
  <kui-cell-group title="自定义内容">
    <kui-grid :columns="3" icon-color="#00BC79">
      <template v-for="i in 3" :key="i">
        <kui-grid-item>
          <kui-icons type="heart" color="#F53F3F" :size="70" />
        </kui-grid-item>
      </template>
    </kui-grid>
  </kui-cell-group>
</template>
