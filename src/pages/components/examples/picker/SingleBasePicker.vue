<script lang="ts">
import { reactive } from 'vue'

export default {
  setup() {
    const modeState = reactive({
      mode: 'light',
      modeChecked: false,
    })

    const changeMode = () => {
      modeState.mode = modeState.mode === 'light' ? 'dark' : 'light'
      // provide("changeMode", data.mode);
      uni.$emit('changeMode', modeState.mode)
    }

    const toastState = reactive({
      content: '',
      show: false,
    })

    const baseState = {
      state: reactive({
        show: false,
        value: [],
        showText: '',
        defaultValue: ['HZ'],
        title: '请选择城市',
        columns: [
          {
            text: '上海市',
            value: 'SH',
            disable: false,
          },
          {
            text: '北京市',
            value: 'BJ',
            disable: false,
          },
          {
            text: '杭州市',
            value: 'HZ',
            disable: false,
          },
          {
            text: '哈尔滨市',
            value: 'HRB',
            disable: false,
          },
          {
            text: '郑州市',
            value: 'ZZ',
            disable: false,
          },
        ],
      }),
      methods: {
        onClick() {
          baseState.state.show = true
        },
        onChange(e) {
          console.log(e)
        },
        onConfirm(e) {
          console.log(e)
          baseState.state.showText = baseState.state.value[0].text
          toastState.content = `当前选中值：${JSON.stringify(
            baseState.state.value[0].value,
          )}`
          toastState.show = true
        },
        onCancel(e) {
          console.log(e)
        },
      },
    }

    return {
      modeState,
      changeMode,
      toastState,
      baseState,
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
            <kui-switch v-model="modeState.modeChecked" @change="changeMode" />
          </view>
          <kui-space :gap="[30, 0]" direction="column" block>
            <kui-cell-group title="单列选择">
              <kui-cell
                title="基本用法"
                :show-right-icon="false"
                :desc="baseState.state.showText"
                center
                @click="baseState.methods.onClick"
              />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-picker
      v-model="baseState.state.value"
      v-model:show="baseState.state.show"
      :columns="baseState.state.columns"
      :title="baseState.state.title"
      :default-value="baseState.state.defaultValue"
      @change="baseState.methods.onChange"
      @confirm="baseState.methods.onConfirm"
      @cancel="baseState.methods.onCancel"
    />
    <kui-toast v-model:show="toastState.show" :content="toastState.content" />
  </view>
</template>
