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
            <kui-cell-group title="横向用法">
              <view
                class="kui-rounded kui-p-3 kui-bg-white" :style="{
                  backgroundColor: baseState.state.mode === 'dark' ? theme.colors[baseState.state.mode].grey[2] : '',
                }"
              >
                <view>
                  <kui-radio-group v-model="baseState.state.value" direction="row">
                    <kui-radio :value="1">
                      苹果
                    </kui-radio>
                    <kui-radio :value="2" disabled>
                      橘子
                    </kui-radio>
                    <kui-radio :value="3">
                      香蕉
                    </kui-radio>
                  </kui-radio-group>
                </view>
                <view class="kui-border-0 kui-border-b kui-border-solid kui-border-gray-100 kui-my-3" />
                <view>
                  <kui-radio-group v-model="baseState.state.value" label-position="left" direction="row">
                    <kui-radio :value="1">
                      苹果
                    </kui-radio>
                    <kui-radio :value="2" disabled>
                      橘子
                    </kui-radio>
                    <kui-radio :value="3">
                      香蕉
                    </kui-radio>
                  </kui-radio-group>
                </view>
              </view>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
