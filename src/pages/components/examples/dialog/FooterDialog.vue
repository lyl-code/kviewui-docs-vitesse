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

    const slotState = {
      state: reactive({
        show: false,
        title: '',
        content: '',
        type: 'normal',
        placeholderText: '请输入姓名',
        footerDirection: 'row',
        footerType: 'margin',
        contentAlign: 'center',
        titleAlign: 'left',
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
          slotState.state.show = true
          slotState.state.title = title
          slotState.state.content = content
          slotState.state.type = type
          slotState.state.placeholderText = title
          slotState.state.footerDirection = footerDirection
          slotState.state.footerType = footerType
          slotState.state.contentAlign = contentAlign
          if (content === 'richtext') {
            slotState.state.content
              = '<p style="color: blue">这是富文本内容</p>'
          }
        },
        cancel() {
          proxy.$refs.slotDialog.cancel()
        },
        confirm() {
          proxy.$refs.slotDialog.confirm()
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
            <kui-cell-group title="按钮组用法">
              <kui-cell
                title="普通类型"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick(
                    '提示',
                    '这是普通类型按钮组',
                    'normal',
                    'row',
                    'margin',
                  )
                "
              />
              <kui-cell
                title="贴边类型"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick(
                    '提示',
                    '这是贴边类型按钮组',
                    'normal',
                    'row',
                    'no-margin',
                  )
                "
              />
              <kui-cell
                title="按钮插槽"
                :show-right-icon="false"
                @click="
                  slotState.methods.onClick(
                    '提示',
                    '这是通过按钮插槽自定义的底部按钮',
                    'normal',
                    'row',
                    'no-margin',
                    'left',
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
    <kui-dialog
      ref="slotDialog"
      v-model:show="slotState.state.show"
      :title="slotState.state.title"
      :content="slotState.state.content"
      :type="slotState.state.type"
      :placeholder-text="slotState.state.placeholderText"
      :footer-direction="slotState.state.footerDirection"
      :mode="state.mode"
      :footer-type="slotState.state.footerType"
      :content-align="slotState.state.contentAlign"
      :title-align="slotState.state.titleAlign"
    >
      <template #footer>
        <view class="kui-p-3 kui-w-full kui-flex kui-justify-end">
          <kui-button
            type="primary"
            text
            shape="square"
            @click="slotState.methods.cancel"
          >
            取消
          </kui-button>
          <kui-button
            type="primary"
            text
            shape="square"
            @click="slotState.methods.confirm"
          >
            确定
          </kui-button>
        </view>
      </template>
    </kui-dialog>
  </view>
</template>
