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

    const iconState = {
      state: reactive({
        show: false,
        title: '',
        content: '',
        type: 'normal',
        placeholderText: '请输入姓名',
        footerDirection: 'row',
        footerType: 'margin',
        contentAlign: 'center',
        icon: '',
        iconColor: '',
        showIcon: true,
      }),
      methods: {
        onClick(
          title = '',
          content = '',
          type = 'normal',
          footerDirection = 'row',
          footerType = 'margin',
          contentAlign = 'center',
          icon = '',
          iconColor = '',
        ) {
          iconState.state.show = true
          iconState.state.title = title
          iconState.state.content = content
          iconState.state.type = type
          iconState.state.placeholderText = title
          iconState.state.footerDirection = footerDirection
          iconState.state.footerType = footerType
          iconState.state.contentAlign = contentAlign
          iconState.state.icon = icon
          iconState.state.iconColor = iconColor
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
      iconState,
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
            <kui-cell-group title="普通对话框">
              <kui-cell
                title="基本用法"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick(
                    '对话框标题',
                    '这是基本用法演示',
                    'normal',
                    'row',
                  )
                "
              />
              <kui-cell
                title="无标题对话框"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick(
                    '',
                    '这是无标题对话框',
                    'normal',
                    'row',
                  )
                "
              />
              <kui-cell
                title="垂直按钮组对话框"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick(
                    '提示',
                    '这是垂直按钮组对话框',
                    'normal',
                    'column',
                  )
                "
              />
              <kui-cell
                title="富文本内容对话框"
                :show-right-icon="false"
                @click="
                  baseState.methods.onClick(
                    '富文本',
                    'richtext',
                    'normal',
                    'row',
                  )
                "
              />
              <kui-cell
                title="普通对话框带图标"
                :show-right-icon="false"
                @click="
                  iconState.methods.onClick(
                    '温馨提示',
                    '这是带图标提示对话框',
                    'normal',
                    'row',
                    'margin',
                    'center',
                    'check-circle-fill',
                    'primary',
                  )
                "
              />
              <kui-cell
                title="垂直按钮组对话框带图标"
                :show-right-icon="false"
                @click="
                  iconState.methods.onClick(
                    '温馨提示',
                    '这是带图标提示对话框',
                    'normal',
                    'column',
                    'margin',
                    'center',
                    'info-circle-fill',
                    'info',
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
      v-model:show="iconState.state.show"
      :title="iconState.state.title"
      :content="iconState.state.content"
      :type="iconState.state.type"
      :placeholder-text="iconState.state.placeholderText"
      :footer-direction="iconState.state.footerDirection"
      :mode="state.mode"
      :footer-type="iconState.state.footerType"
      :content-align="iconState.state.contentAlign"
      :show-icon="iconState.state.showIcon"
      :icon-name="iconState.state.icon"
      :icon-color="iconState.state.iconColor"
    />
  </view>
</template>
