<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const positionState = {
      state: reactive({
        show: false,
        content: '自定义位置',
        bottom: 0,
        top: 0,
        position: 'bottom',
        full: true,
      }),
      methods: {
        onClick(positon = 'bottom', content = '自定义动作按钮-通栏类型', bottom = 0, full = true) {
          // #ifdef H5
          positionState.state.top = 44
          // #endif
          positionState.state.show = true
          positionState.state.position = positon
          positionState.state.bottom = 0
          positionState.state.content = content
          positionState.state.full = full
        },
      },
    }

    return {
      positionState,
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
            <kui-cell-group title="自定义位置">
              <kui-cell title="自定义位置-下-通栏" :show-right-icon="false" @click="positionState.methods.onClick('bottom', '自定义位置-下-通栏')" />
              <kui-cell title="自定义位置-下-非通栏" :show-right-icon="false" @click="positionState.methods.onClick('bottom', '自定义位置-下-非通栏', 0, false)" />
              <kui-cell title="自定义位置-上-通栏" :show-right-icon="false" @click="positionState.methods.onClick('top', '自定义位置-上-通栏')" />
              <kui-cell title="自定义位置-上-非通栏" :show-right-icon="false" @click="positionState.methods.onClick('top', '自定义位置-上-非通栏', 0, false)" />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-snackbar
      v-model:show="positionState.state.show"
      :content="positionState.state.content"
      :bottom="positionState.state.bottom"
      :top="positionState.state.top"
      :position="positionState.state.position"
      :full="positionState.state.full"
    />
  </view>
</template>
