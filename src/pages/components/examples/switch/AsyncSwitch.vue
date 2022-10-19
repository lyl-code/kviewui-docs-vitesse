<script lang="ts">
import {
  reactive,
} from 'vue'

export default {
  setup() {
    const toastState = {
      state: reactive({
        show: false,
        content: '',
      }),
    }

    const asyncState = {
      state: reactive({
        checked: true,
      }),
      methods: {
        onChange(e) {
          console.log(`async:${e}`)
          // asyncState.state.checked = e;
          const desc = e ? '打开' : '关闭'
          toastState.state.content = `2s后开关${desc}`
          toastState.state.show = true

          setTimeout(() => {
            asyncState.state.checked = e
          }, 2000)
        },
      },
    }

    return {
      toastState,
      asyncState,
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
            <kui-cell-group title="异步控制">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-switch v-model="asyncState.state.checked" @change="asyncState.methods.onChange" />
                </template>
              </kui-cell>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-toast v-model:show="toastState.state.show" :content="toastState.state.content" />
  </view>
</template>
