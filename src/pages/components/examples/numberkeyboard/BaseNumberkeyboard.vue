<script lang="ts">
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      mode: 'light',
      modeChecked: false,
    })

    const changeMode = () => {
      state.mode = state.mode == 'light' ? 'dark' : 'light'
      // provide("changeMode", data.mode);
      uni.$emit('changeMode', state.mode)
    }

    const baseState = {
      state: reactive({
        show: false,
        value: '',
      }),
      toast: reactive({
        show: false,
        content: '',
      }),
      methods: {
        onClick(e) {
          baseState.state.show = true
        },
        onInput(e) {
          baseState.toast.content = `数字按键：${e}`
          baseState.toast.show = true
        },
        onDelete(e) {
          baseState.toast.content = '当前按键：删除'
          baseState.toast.show = true
        },
      },
    }

    return {
      state,
      changeMode,
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
          <view class="kui-my-3 kui-flex">
            <kui-text>暗黑模式：</kui-text>
            <kui-switch v-model="state.modeChecked" @change="changeMode" />
          </view>
          <kui-space :gap="[30, 0]" direction="column">
            <kui-cell-group title="非右边栏模式">
              <kui-cell title="基本用法" @click="baseState.methods.onClick" />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-numberkeyboard
      v-model:show="baseState.state.show"
      v-model="baseState.state.value"
      :mode="state.mode"
      @input="baseState.methods.onInput"
      @delete="baseState.methods.onDelete"
    />
    <kui-toast
      v-model:show="baseState.toast.show"
      :content="baseState.toast.content"
    />
  </view>
</template>
