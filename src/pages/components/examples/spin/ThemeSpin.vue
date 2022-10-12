<template>
  <kui-cell-group title="自定义主题色">
    <kui-space :gap="[0, 30]">
      <view class="kui-w-1-3 kui-h-28">
        <view
          class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md"
        >
          <kui-spin type="chase-dot" theme="magenta">
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
          <kui-spin type="bounce" theme="blue">
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
