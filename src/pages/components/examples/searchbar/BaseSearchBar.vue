<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const baseValue = ref('')

    return {
      ...toRefs({
        baseValue,
      }),
    }
  },
}
</script>

<template>
  <view class="kui-w-full">
    <kui-page :padding-x="0" :custom-header="false">
      <template #body>
        <view class="kui-w-full">
          <kui-space :gap="[40, 0]" direction="column">
            <view class="kui-w-full">
              <view class="kui-px-3">
                <kui-cell-group title="基本用法" />
              </view>
              <kui-searchbar v-model="baseValue" />
            </view>
          </kui-space>
          <view class="kui-px-3 kui-w-full kui-box-border">
            <kui-cell-group title="">
              <kui-text color="hsl(213,10.00%, 56.86%)">
                示例数据为组件支持的部分数据，详细支持数据请参考组件源码和组件文档
              </kui-text>
            </kui-cell-group>
          </view>
        </view>
      </template>
    </kui-page>
  </view>
</template>
