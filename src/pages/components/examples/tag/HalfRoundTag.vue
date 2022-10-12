<template>
  <kui-cell-group title="半圆角标签">
    <view class="kui-w-full">
      <view class="kui-mb-3">
        <kui-tag size="large" half-round="right" type="primary">
          大号标签
        </kui-tag>
      </view>
      <kui-space :gap="[30, 20]" align="center">
        <kui-tag size="normal" half-round="right" type="primary">
          普通标签
        </kui-tag>
        <kui-tag size="small" half-round="right" type="primary">
          小型标签
        </kui-tag>
        <kui-tag size="mini" half-round="right" type="primary">
          迷你标签
        </kui-tag>
      </kui-space>
    </view>
    <view class="kui-w-full">
      <view class="kui-my-3">
        <kui-tag size="large" half-round="left" type="primary">
          大号标签
        </kui-tag>
      </view>
      <kui-space :gap="[30, 20]" align="center">
        <kui-tag size="normal" half-round="left" type="primary">
          普通标签
        </kui-tag>
        <kui-tag size="small" half-round="left" type="primary">
          小型标签
        </kui-tag>
        <kui-tag size="mini" half-round="left" type="primary">
          迷你标签
        </kui-tag>
      </kui-space>
    </view>
  </kui-cell-group>
</template>
