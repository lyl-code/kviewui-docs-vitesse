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

    const state = {
      mode: 'light',
      toast: reactive({
        show: false,
        content: '',
      }),
      change: {
        methods: {
          onChange(e) {
            const desc = e.checked ? '选中' : '取消'
            state.toast.content = `${desc}复选按钮`
            state.toast.show = true
          },
        },
      },
    }

    return {
      theme,
      state,
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
            <kui-cell-group title="change监听">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-checkbox @change="state.change.methods.onChange">
                    复选按钮
                  </kui-checkbox>
                </template>
              </kui-cell>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-toast v-model:show="state.toast.show" :content="state.toast.content" />
  </view>
</template>
