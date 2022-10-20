<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <view class="kui-w-full kui-h-full">
          <kui-space :gap="[30, 0]" direction="column">
            <kui-cell-group title="半选中状态">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-checkbox indeterminate>
                    复选按钮
                  </kui-checkbox>
                </template>
              </kui-cell>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
