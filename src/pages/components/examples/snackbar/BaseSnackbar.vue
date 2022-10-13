<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const baseState = {
      state: reactive({
        show: false,
        content: '基本用法',
        top: 0,
      }),
      methods: {
        onClick() {
          // #ifdef H5
          baseState.state.top = 44
          // #endif
          baseState.state.show = true
        },
      },
    }

    return {
      baseState,
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
            <kui-cell-group :title="baseState.state.content">
              <kui-cell title="基本用法" :show-right-icon="false" @click="baseState.methods.onClick" />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-snackbar
      v-model:show="baseState.state.show"
      :content="baseState.state.content"
      :top="baseState.state.top"
    />
  </view>
</template>
