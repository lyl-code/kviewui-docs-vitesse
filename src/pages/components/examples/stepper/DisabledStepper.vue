<script lang="ts">
import { reactive } from 'vue'

export default {
  setup() {
    const disabledState = {
      state: reactive({
        value: '',
      }),
    }

    return {
      disabledState,
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <view class="kui-w-full kui-h-full">
          <kui-space :gap="[30, 0]" direction="column">
            <kui-cell-group title="禁用全部">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-stepper v-model="disabledState.state.value" disabled />
                </template>
              </kui-cell>
            </kui-cell-group>
            <kui-cell-group title="">
              <kui-text color="hsl(213,10.00%, 56.86%)">
                示例数据为组件支持的部分数据，详细支持数据请参考组件源码和组件文档
              </kui-text>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
