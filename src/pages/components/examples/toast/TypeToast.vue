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
            <kui-cell-group title="提示类型">
              <kui-cell
                title="成功提示"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick('', '成功提示', true, '', 'success')
                "
              />
              <kui-cell
                title="警告提示"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick('', '警告提示', true, '', 'warning')
                "
              />
              <kui-cell
                title="失败提示"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick('', '失败提示', true, '', 'danger')
                "
              />
              <kui-cell
                title="加载提示"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick('', '加载提示', true, '', 'loading')
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
