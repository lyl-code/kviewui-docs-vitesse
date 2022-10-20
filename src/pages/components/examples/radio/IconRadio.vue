<script lang="ts">
import {
  getCurrentInstance,
  reactive,
} from 'vue'

export default {
  setup() {
    const {
      proxy,
    }: any = getCurrentInstance()
    const theme = proxy.$theme

    const baseState = {
      state: reactive({
        value: 1,
        checked: false,
        mode: 'light',
      }),
    }

    const changeMode = () => {
      baseState.state.mode = baseState.state.mode == 'light' ? 'dark' : 'light'

      uni.$emit('changeMode', baseState.state.mode)
    }

    return {
      theme,
      baseState,
      changeMode,
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <view class="kui-w-full kui-h-full">
          <view class="kui-my-3 kui-h-full kui-flex kui-items-center">
            <kui-text>暗黑模式：</kui-text>
            <kui-switch v-model="baseState.state.checked" @change="changeMode" />
          </view>
          <kui-space :gap="[30, 0]" direction="column">
            <kui-cell-group title="自定义图标">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <view class="kui-flex kui-flex-col">
                    <kui-radio-group v-model="baseState.state.value">
                      <kui-radio active-icon="check_circle" inactive-icon="check_circle_outline" :value="1">
                        自定义图标1
                      </kui-radio>
                      <kui-radio active-icon="check_circle" inactive-icon="check_circle_outline" :value="2">
                        自定义图标1
                      </kui-radio>
                    </kui-radio-group>
                  </view>
                </template>
              </kui-cell>
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <view class="kui-flex kui-flex-col">
                    <kui-radio-group v-model="baseState.state.value" label-position="left">
                      <kui-radio active-icon="radio-checked" :value="1">
                        自定义图标2
                      </kui-radio>
                      <kui-radio active-icon="radio-checked" :value="2">
                        自定义图标2
                      </kui-radio>
                    </kui-radio-group>
                  </view>
                </template>
              </kui-cell>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
