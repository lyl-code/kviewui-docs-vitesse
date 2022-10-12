<template>
  <kui-cell-group title="自定义背景色">
    <kui-space :gap="[0, 30]">
      <view class="kui-w-1-3 kui-h-28">
        <view
          class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md"
        >
          <kui-spin type="chase-dot" background-color="hsl(100, 100%, 10%)">
            <view class="kui-pt-3">
              <kui-text selectable>
                chase-dot
              </kui-text>
            </view>
          </kui-spin>
        </view>
      </view>
      <view class="kui-w-1-3 kui-h-28">
        <view
          class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md"
        >
          <kui-spin type="bounce" background-color="hsl(10, 10%, 50%)">
            <view class="kui-pt-3">
              <kui-text selectable>
                chase-dot
              </kui-text>
            </view>
          </kui-spin>
        </view>
      </view>
    </kui-space>
  </kui-cell-group>
</template>
