<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const cusState = {
      state: reactive({
        show: false,
        content: '自定义背景色和字体颜色',
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.2)',
        color: 'rgba(0,0,0,1)',
      }),
      methods: {
        onClick() {
          // #ifdef H5
          cusState.state.top = 44
          // #endif
          cusState.state.show = true
        },
      },
    }

    return {
      cusState,
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
            <kui-cell-group title="自定义样式">
              <kui-cell title="自定义背景色和字体颜色" :show-right-icon="false" @click="cusState.methods.onClick" />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-snackbar
      v-model:show="cusState.state.show"
      :content="cusState.state.content"
      :top="cusState.state.top"
      :background-color="cusState.state.backgroundColor"
      :color="cusState.state.color"
    />
  </view>
</template>
