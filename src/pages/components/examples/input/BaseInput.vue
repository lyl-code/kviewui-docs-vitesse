<script lang="ts">
import { reactive } from 'vue'

export default {
  setup() {
    const modeState = {
      state: reactive({
        mode: 'light',
        modeChecked: false,
      }),
      methods: {
        onChange(e) {
          modeState.state.mode = e ? 'dark' : 'light'
          uni.$emit('changeMode', modeState.state.mode)
        },
      },
    }

    return {
      modeState,
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :padding-x="0" :custom-header="false">
      <template #body>
        <view class="kui-w-full kui-h-full">
          <view class="kui-my-3 kui-px-5 kui-h-full kui-flex kui-items-center">
            <kui-text>暗黑模式：</kui-text>
            <kui-switch
              v-model="modeState.state.modeChecked"
              @change="modeState.methods.onChange"
            />
          </view>
          <kui-space :gap="[30, 0]" direction="column">
            <view class="kui-w-full">
              <view class="kui-px-5">
                <kui-cell-group title="基本用法" />
              </view>
              <kui-input label="文本" placeholder="请输入文本" />
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
