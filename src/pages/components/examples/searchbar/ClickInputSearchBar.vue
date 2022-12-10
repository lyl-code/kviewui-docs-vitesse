<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const clickState = {
      state: reactive({
        value: '',
      }),
      methods: {
        onClickInput(e) {
          console.log(e)
        },
      },
    }

    const toastState = {
      state: reactive({
        show: false,
        content: '',
      }),
    }

    const clickInput = (e: Event) => {
      toastState.state.content = '搜索框点击事件触发'
      toastState.state.show = true
    }

    return {
      ...toRefs({
        clickState,
        clickInput,
        toastState,
      }),
    }
  },
}
</script>

<template>
  <view class="kui-w-full">
    <kui-page :padding-x="0" :custom-header="false">
      <template #body>
        <view class="kui-w-full">
          <kui-space :gap="[40, 0]" direction="column">
            <view class="kui-w-full">
              <view class="kui-px-3">
                <kui-cell-group title="搜索框点击事件监听" />
              </view>
              <kui-searchbar v-model="clickState.state.value" disabled @click-input="clickInput" />
            </view>
          </kui-space>
          <view class="kui-px-3 kui-w-full kui-box-border">
            <kui-cell-group title="">
              <kui-text color="hsl(213,10.00%, 56.86%)">
                示例数据为组件支持的部分数据，详细支持数据请参考组件源码和组件文档
              </kui-text>
            </kui-cell-group>
          </view>
        </view>
      </template>
    </kui-page>
    <kui-toast v-model:show="toastState.state.show" :content="toastState.state.content" />
  </view>
</template>
