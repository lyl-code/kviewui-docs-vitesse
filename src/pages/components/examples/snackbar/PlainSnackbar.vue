<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const plainState = {
      state: reactive({
        show: false,
        content: '',
        type: 'primary',
        top: 0,
      }),
      methods: {
        onClick(type: string, content: string) {
          // #ifdef H5
          plainState.state.top = 44
          // #endif
          plainState.state.show = true
          plainState.state.content = content
          plainState.state.type = type
        },
      },
    }

    return {
      plainState,
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
            <kui-cell-group title="朴素类型">
              <kui-cell title="主要通知" :show-right-icon="false" @click="plainState.methods.onClick('info', '主要通知')" />
              <kui-cell title="成功通知" :show-right-icon="false" @click="plainState.methods.onClick('success', '成功通知')" />
              <kui-cell title="警告通知" :show-right-icon="false" @click="plainState.methods.onClick('warning', '警告通知')" />
              <kui-cell title="危险通知" :show-right-icon="false" @click="plainState.methods.onClick('danger', '危险通知')" />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-snackbar
      v-model:show="plainState.state.show"
      :content="plainState.state.content"
      :type="plainState.state.type"
      :top="plainState.state.top"
      plain
    />
  </view>
</template>
