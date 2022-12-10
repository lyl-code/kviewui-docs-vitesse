<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const changeState = {
      state: reactive({
        value: 20,
        toast: {
          show: false,
          content: '',
        },
      }),
      methods: {
        onChange(e) {
          if (e) {
            changeState.state.toast.content = `当前值：${e.value}`
            changeState.state.toast.show = true
          }
        },
      },
    }

    return {
      ...toRefs({
        changeState,
      }),
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <view class="kui-w-full">
          <kui-space :gap="[30, 0]" direction="column">
            <view class="kui-w-full">
              <kui-cell-group title="选择事件监听">
                <kui-slider v-model="changeState.state.value" @change="changeState.methods.onChange" />
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-toast v-model:show="changeState.state.toast.show" :content="changeState.state.toast.content" />
  </view>
</template>

<style>

</style>
