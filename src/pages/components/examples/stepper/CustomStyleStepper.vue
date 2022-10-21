<script lang="ts">
import { reactive } from 'vue'

export default {
  setup() {
    const baseState = {
      state: reactive({
        decimalPlacesValue: '',
      }),
    }

    return {
      baseState,
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
            <kui-cell-group title="自定义样式">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-stepper
                    v-model="baseState.state.decimalPlacesValue"
                    reduce-border-color="yellow"
                    add-border-color="yellow"
                    add-icon-background-color="yellow"
                    shape="square"
                  />
                </template>
              </kui-cell>
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-stepper
                    v-model="baseState.state.decimalPlacesValue"
                    reduce-border-color="grey"
                    add-border-color="grey"
                    add-icon-background-color=""
                    shape="half-round"
                    border-color="grey"
                    input-width="60rpx"
                    :input-spacing="0"
                  />
                </template>
              </kui-cell>
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-stepper
                    v-model="baseState.state.decimalPlacesValue"
                    reduce-border-color="grey"
                    :reduce-border-color-level="4"
                    reduce-icon-background-color="grey"
                    :reduce-icon-background-color-level="2"
                    add-border-color="grey"
                    :add-border-color-level="4"
                    shape="half-round"
                    border-color="grey"
                    :border-color-level="4"
                    add-icon-background-color="grey"
                    :add-icon-background-color-level="2"
                    input-width="60rpx"
                    :input-spacing="0"
                  />
                </template>
              </kui-cell>
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-stepper
                    v-model="baseState.state.decimalPlacesValue"
                    reduce-border-color="danger"
                    add-border-color="danger"
                    add-icon-background-color="danger"
                    shape="half-round"
                    input-background-color="danger"
                    :input-background-color-level="2"
                  />
                </template>
              </kui-cell>
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-stepper
                    v-model="baseState.state.decimalPlacesValue"
                    reduce-border-color="info"
                    add-border-color="info"
                    add-icon-background-color="info"
                    shape="half-round"
                    input-background-color="info"
                    :input-background-color-level="2"
                    border-color="info"
                    :border-color-level="2"
                    :input-spacing="0"
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
