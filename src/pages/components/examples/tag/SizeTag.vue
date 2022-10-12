<template>
  <kui-cell-group title="标签尺寸">
    <view class="kui-mb-3">
      <kui-tag size="large" type="primary">
        大号标签
      </kui-tag>
    </view>
    <kui-space :gap="[30, 20]" align="center">
      <kui-tag size="normal" type="primary">
        普通标签
      </kui-tag>
      <kui-tag size="small" type="primary">
        小型标签
      </kui-tag>
      <kui-tag size="mini" type="primary">
        迷你标签
      </kui-tag>
    </kui-space>
  </kui-cell-group>
</template>
