<script lang="ts">
import { getCurrentInstance, reactive } from 'vue'

export default {
  setup() {
    const { proxy }: any = getCurrentInstance()

    const baseState = {
      state: reactive({
        show: false,
        title: '',
        content: '',
        type: 'normal',
        placeholderText: '请输入姓名',
        footerDirection: 'row',
        footerType: 'margin',
        contentAlign: 'center',
      }),
      methods: {
        onClick(
          title = '',
          content = '',
          type = 'normal',
          footerDirection = 'row',
          footerType = 'margin',
          contentAlign = 'center',
        ) {
          baseState.state.show = true
          baseState.state.title = title
          baseState.state.content = content
          baseState.state.type = type
          baseState.state.placeholderText = title
          baseState.state.footerDirection = footerDirection
          baseState.state.footerType = footerType
          baseState.state.contentAlign = contentAlign
          if (content === 'richtext') {
            baseState.state.content
              = '<p style="color: blue">这是富文本内容</p>'
          }
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
      state,
      changeMode,
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
            <kui-cell-group title="内容对齐">
              <kui-cell
                title="内容居左对齐"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick(
                    '对话框标题',
                    '内容居左对齐',
                    'normal',
                    'row',
                    'margin',
                    'left',
                  )
                "
              />
              <kui-cell
                title="内容居中对齐"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick(
                    '对话框标题',
                    '内容居中对齐',
                    'normal',
                    'row',
                    'margin',
                    'center',
                  )
                "
              />
              <kui-cell
                title="内容居右对齐"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick(
                    '对话框标题',
                    '内容居右对齐',
                    'normal',
                    'row',
                    'margin',
                    'right',
                  )
                "
              />
            </kui-cell-group>
            <kui-cell-group title="">
              <kui-text color="hsl(213,10.00%, 56.86%)">
                示例数据为组件支持的部分数据，详细支持数据请参考组件源码和组件文档
              </kui-text>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-dialog
      v-model:show="baseState.state.show"
      :title="baseState.state.title"
      :content="baseState.state.content"
      :type="baseState.state.type"
      :placeholder-text="baseState.state.placeholderText"
      :footer-direction="baseState.state.footerDirection"
      :mode="state.mode"
      :footer-type="baseState.state.footerType"
      :content-align="baseState.state.contentAlign"
    />
  </view>
</template>
