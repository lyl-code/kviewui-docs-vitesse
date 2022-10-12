<template>
  <view class="kui-mt-5">
    <kui-text>磨砂玻璃遮罩用法</kui-text>
    <kui-overlay
      radius-size="sm"
      :close-on-click-mask="false"
      blur
      :overlay-ness="0.4"
      :show="true"
    >
      <view class="kui-mt-0">
        <view class="kui-mt-3 kui-p-3 kui-box-border">
          <kui-space :gap="[40, 20]">
            <kui-button type="primary">
              主要按钮
            </kui-button>
            <kui-button type="info">
              信息按钮
            </kui-button>
            <kui-button>默认按钮</kui-button>
            <kui-button type="success">
              成功按钮
            </kui-button>
            <kui-button type="warning">
              警告按钮
            </kui-button>
            <kui-button type="danger">
              危险按钮
            </kui-button>
            <kui-button type="danger" background-color="orange" text-color="black">
              自定义按钮
            </kui-button>
          </kui-space>
        </view>
      </view>
    </kui-overlay>
  </view>
</template>
