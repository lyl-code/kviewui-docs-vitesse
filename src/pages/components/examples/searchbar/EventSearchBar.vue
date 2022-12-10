<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const toastState = {
      state: reactive({
        show: false,
        content: '',
      }),
    }

    const eventState = {
      state: reactive({
        value: '',
      }),
      methods: {
        onSearch(e) {
          toastState.state.content = `搜索内容：${e}`
          toastState.state.show = true
        },
        onClickAction(e) {
          toastState.state.content = '取消'
          toastState.state.show = true
        },
        onClickLefticon(e) {
          toastState.state.content = '左边图标点击事件触发'
          toastState.state.show = true
        },
      },
    }

    return {
      ...toRefs({
        toastState,
        eventState,
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
                <kui-cell-group title="事件监听" desc="演示搜索事件/右边动作按钮点击事件/左边图标点击事件" />
              </view>
              <kui-searchbar v-model="eventState.state.value" show-action @search="eventState.methods.onSearch" @click-lefticon="eventState.methods.onClickLefticon" @click-action="eventState.methods.onClickAction" />
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
