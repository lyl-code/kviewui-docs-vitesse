<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const verState = {
      state: reactive({
        show: false,
        content: '自定义动作按钮',
        top: 0,
        backgroundColor: 'rgba(0,0,0,1)',
        contentCenter: false,
        full: true,
      }),
      methods: {
        onClick(full = true, content = '自定义动作按钮-通栏类型') {
          // #ifdef H5
          verState.state.top = 44
          // #endif
          verState.state.show = true
          verState.state.full = full
          verState.state.content = content
        },
      },
    }

    return {
      verState,
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
            <kui-cell-group title="垂直排列">
              <kui-cell title="自定义动作按钮-通栏类型" :show-right-icon="false" @click="verState.methods.onClick" />
              <kui-cell title="自定义动作按钮-非通栏类型" :show-right-icon="false" @click="verState.methods.onClick(false, '自定义动作按钮-非通栏类型')" />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-snackbar
      v-model:show="verState.state.show"
      :content="verState.state.content"
      :top="verState.state.top"
      :background-color="verState.state.backgroundColor"
      :content-center="false"
      :full="verState.state.full"
      action-slot
    >
      <template #action>
        <kui-button type="primary" shape="square" size="small">
          关闭
        </kui-button>
      </template>
    </kui-snackbar>
  </view>
</template>
