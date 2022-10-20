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

    const typeState = {
      state: reactive({
        text: '',
        password: '',
        number: '',
        integer: '',
        tel: '',
        nickname: '',
        idcard: '',
        safePassword: '',
        readonly: '只读',
        code: '',
      }),
      methods: {
        onChange(e) {
          console.log(typeState.state.integer)
        },
      },
    }

    return {
      modeState,
      typeState,
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
          <view class="kui-my-3">
            <kui-space :gap="[30, 0]" direction="column">
              <view class="kui-w-full">
                <view class="kui-px-5">
                  <kui-cell-group title="错误提示" />
                </view>
                <kui-input
                  v-model="typeState.state.text"
                  label="文本"
                  placeholder="必填内容"
                  required
                />
                <kui-input
                  v-model="typeState.state.text"
                  label="错误"
                  placeholder="输入内容标红"
                  error
                />
                <kui-input
                  v-model="typeState.state.text"
                  label="错误"
                  placeholder="错误提示显示"
                  error-message="错误提示显示"
                />
              </view>
            </kui-space>
          </view>
        </view>
      </template>
    </kui-page>
  </view>
</template>
