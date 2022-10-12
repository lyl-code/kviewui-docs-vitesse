<template>
  <kui-cell-group title="标签类型">
    <view class="kui-w-full">
      <kui-space :gap="[30, 20]">
        <kui-tag>默认标签</kui-tag>
        <kui-tag type="primary">
          主要标签
        </kui-tag>
        <kui-tag type="info">
          信息标签
        </kui-tag>
        <kui-tag type="danger">
          危险标签
        </kui-tag>
        <kui-tag type="warning">
          警告标签
        </kui-tag>
        <kui-tag type="success">
          成功标签
        </kui-tag>
      </kui-space>
    </view>
  </kui-cell-group>
</template>
