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
        toast: {
          show: false,
          content: '',
        },
      }),
      methods: {
        onChange(type = 'base', e: Event) {
          if (type === 'change') {
            const content = `当前选中值：${e}`
            baseState.state.toast.content = content
            baseState.state.toast.show = true
          }
        },
      },
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
            <kui-cell-group title="change监听">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <view class="kui-flex kui-flex-col">
                    <kui-radio-group v-model="baseState.state.value" @change="baseState.methods.onChange('change', $event)">
                      <kui-radio :value="1">
                        选项1
                      </kui-radio>
                      <kui-radio :value="2">
                        选项2
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
    <kui-toast v-model:show="baseState.state.toast.show" :content="baseState.state.toast.content" />
  </view>
</template>
