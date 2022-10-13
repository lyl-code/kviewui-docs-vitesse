<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const durationState = {
      state: reactive({
        show: false,
        content: '自定义时长 5s',
        duration: 5,
        durationS: 5,
        top: 0,
        timer: null,
      }),
      methods: {
        onClick() {
          // #ifdef H5
          durationState.state.top = 44
          // #endif
          durationState.state.show = true
          durationState.state.timer = setInterval(() => {
            durationState.state.durationS--
            durationState.state.content = `自定义时长 ${durationState.state.durationS}s`
          }, 1000)
        },
        closed() {
          clearInterval(durationState.state.timer)
          durationState.state.durationS = 5
          durationState.state.content = `自定义时长 ${durationState.state.durationS}s`
        },
      },
    }

    return {
      durationState,
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
            <kui-cell-group title="自定义时长">
              <kui-cell title="自定义时长" :show-right-icon="false" @click="durationState.methods.onClick" />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-snackbar
      v-model:show="durationState.state.show"
      :content="durationState.state.content"
      :top="durationState.state.top"
      :duration="durationState.state.duration * 1000"
      @closed="durationState.methods.closed"
    />
  </view>
</template>
