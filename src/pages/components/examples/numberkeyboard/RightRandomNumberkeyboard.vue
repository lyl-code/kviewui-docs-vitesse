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

    const typeState = {
      state: reactive({
        show: false,
        randomNumber: false,
        value: '',
      }),
      toast: reactive({
        show: false,
        content: '',
      }),
      methods: {
        onClickRandom(e) {
          typeState.state.randomNumber = true
          typeState.state.show = true
        },
        onInput(e) {
          typeState.toast.content = `数字按键：${e}`
          typeState.toast.show = true
        },
        onDelete(e) {
          typeState.toast.content = '当前按键：删除'
          typeState.toast.show = true
        },
      },
    }

    return {
      state,
      changeMode,
      typeState,
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
            <kui-cell-group title="右边栏模式">
              <kui-cell
                title="随机数键盘"
                @click="typeState.methods.onClickRandom"
              />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-numberkeyboard
      v-model:show="typeState.state.show"
      v-model="typeState.state.value"
      right-sidebar
      :mode="state.mode"
      :random-number="typeState.state.randomNumber"
      @input="typeState.methods.onInput"
      @delete="typeState.methods.onDelete"
    />
    <kui-toast
      v-model:show="typeState.toast.show"
      :content="typeState.toast.content"
    />
  </view>
</template>
