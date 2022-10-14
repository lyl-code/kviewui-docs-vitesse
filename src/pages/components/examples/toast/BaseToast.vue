<script lang="ts">
import { reactive } from 'vue'

export default {
  setup() {
    const baseState = {
      state: reactive({
        show: false,
        title: '',
        content: '',
        center: true,
        bottom: '50px',
        type: 'normal',
        overlay: false,
        icon: '',
      }),
      methods: {
        onClick(
          title = '',
          content = '',
          center = true,
          bottom = '50px',
          type = 'normal',
          overlay = false,
          icon = '',
        ) {
          baseState.state.show = true
          baseState.state.title = title
          baseState.state.content = content
          baseState.state.center = center
          baseState.state.bottom = bottom
          baseState.state.type = type
          baseState.state.overlay = overlay
          baseState.state.icon = icon
        },
      },
    }

    const state = reactive({
      mode: 'light',
      modeChecked: false,
    })

    const changeMode = () => {
      state.mode = state.mode == 'light' ? 'dark' : 'light'
      // provide("changeMode", data.mode);
      uni.$emit('changeMode', state.mode)
    }

    return {
      baseState,
      changeMode,
      state,
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <view class="kui-w-full kui-h-full">
          <view class="kui-my-3 kui-flex">
            <kui-text>暗黑模式：</kui-text>
            <kui-switch v-model="state.modeChecked" @change="changeMode" />
          </view>
          <kui-space :gap="[30, 0]" direction="column">
            <kui-cell-group title="基本用法">
              <kui-cell
                title="文字提示"
                :show-right-icon="false"
                @click="baseState.methods.onClick('', '普通文本内容提示')"
              />
              <kui-cell
                title="展示标题"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick('这是标题', '标题文本内容提示')
                "
              />
              <kui-cell
                title="底部展示"
                :show-right-icon="false"
                @click="baseState.methods.onClick('', '底部提示', false)"
              />
              <kui-cell
                title="自定义图标"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick(
                    '',
                    '自定义图标',
                    true,
                    '',
                    '',
                    false,
                    'help_outline',
                  )
                "
              />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-toast
      v-model:show="baseState.state.show"
      :title="baseState.state.title"
      :content="baseState.state.content"
      :center="baseState.state.center"
      :bottom="baseState.state.bottom"
      :type="baseState.state.type"
      :overlay="baseState.state.overlay"
      :icon="baseState.state.icon"
    />
  </view>
</template>
