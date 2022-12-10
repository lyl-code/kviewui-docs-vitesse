<script lang="ts">
import {
  getCurrentInstance,
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const {
      proxy,
    }: any = getCurrentInstance()

    const theme = proxy.$theme

    const customBackgroundValue = ref('')

    return {
      ...toRefs({
        customBackgroundValue,
        theme,
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
                <kui-cell-group title="自定义样式" desc="支持自定义搜索框外部背景色和搜索框背景色" />
              </view>
              <kui-searchbar v-model="customBackgroundValue" :background="`linear-gradient(to right, ${theme.colors.light.primary[5]}, ${theme.colors.light.primary[3]})`" input-background="grey" />
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
