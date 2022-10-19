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
    const baseState = {
      state: reactive({
        checked: true,
      }),
      methods: {
        onChange(e) {
          // console.log(e);
          toastState.state.content = JSON.stringify(e)
          toastState.state.show = true
        },
      },
    }

    return {
      toastState,
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
          <kui-space :gap="[30, 0]" direction="column">
            <kui-cell-group title="change监听">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-switch v-model="baseState.state.checked" @change="baseState.methods.onChange" />
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
