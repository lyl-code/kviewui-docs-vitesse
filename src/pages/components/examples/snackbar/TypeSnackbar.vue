<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const typeState = {
      state: reactive({
        show: false,
        content: '',
        type: 'primary',
        top: 0,
      }),
      methods: {
        onClick(type: string, content: string) {
          // #ifdef H5
          typeState.state.top = 44
          // #endif
          typeState.state.show = true
          typeState.state.content = content
          typeState.state.type = type
        },
      },
    }

    return {
      typeState,
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
            <kui-cell-group title="消息类型">
              <kui-cell title="主要通知" :show-right-icon="false" @click="typeState.methods.onClick('info', '主要通知')" />
              <kui-cell title="成功通知" :show-right-icon="false" @click="typeState.methods.onClick('success', '成功通知')" />
              <kui-cell title="警告通知" :show-right-icon="false" @click="typeState.methods.onClick('warning', '警告通知')" />
              <kui-cell title="危险通知" :show-right-icon="false" @click="typeState.methods.onClick('danger', '危险通知')" />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-snackbar
      v-model:show="typeState.state.show"
      :content="typeState.state.content"
      :type="typeState.state.type"
      :top="typeState.state.top"
    />
  </view>
</template>
