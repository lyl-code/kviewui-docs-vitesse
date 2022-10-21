<script lang="ts">
import { reactive } from 'vue'

export default {
  setup() {
    const stepState = {
      state: reactive({
        decimalValue: '',
      }),
    }

    return {
      stepState,
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
            <kui-cell-group title="小数步长(step:0.5)">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-stepper
                    v-model="stepState.state.decimalValue"
                    :step="0.5"
                    :min="4.5"
                  />
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
