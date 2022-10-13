<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const noFullState = {
      state: reactive({
        show: false,
        content: '非通栏类型',
        top: 0,
      }),
      methods: {
        onClick() {
          // #ifdef H5
          noFullState.state.top = 44
          // #endif
          noFullState.state.show = true
        },
      },
    }

    return {
      noFullState,
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <view class="kui-w-full kui-h-full kui-py-5">
          <kui-space :gap="[30, 0]" direction="column">
            <kui-cell-group title="非通栏类型">
              <kui-cell title="非通栏类型" :show-right-icon="false" @click="noFullState.methods.onClick" />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-snackbar
      v-model:show="noFullState.state.show"
      :content="noFullState.state.content"
      :top="noFullState.state.top"
      background-color="#333333"
      :full="false"
      :opacity="0.8"
    />
  </view>
</template>
