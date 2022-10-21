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

    const formatValue = (
      value:
      | Array<{
        text: string
      }>
      | any,
    ) => {
      if (value) {
        const arr: Array<string> = []
        for (const i in value) arr.push(value[i].value)

        return arr
      }
    }

    const multiseState = {
      state: reactive({
        show: false,
        value: [],
        showText: '',
        formatValue: '',
        formatSeparator: '-',
        title: '请选择城市',
        columns: [
          [
            {
              text: '亚洲',
              value: 'YZ',
            },
            {
              text: '欧洲',
              value: 'OZ',
            },
          ],
          [
            {
              text: '中国',
              value: 'CHN',
            },
            {
              text: '瑞典',
              value: 'SWE',
            },
          ],
          [
            {
              text: '北京',
              value: 'BJ',
            },
            {
              text: '上海',
              value: 'SH',
            },
          ],
        ],
      }),
      methods: {
        onClick() {
          multiseState.state.show = true
        },
        onChange(e) {
          console.log(e)
        },
        onConfirm(e) {
          toastState.content = `当前选中值：${JSON.stringify(
            formatValue(multiseState.state.value),
          )}`
          toastState.show = true
        },
        onCancel(e) {
          console.log(e)
        },
      },
    }

    watch(
      () => multiseState.state.formatValue,
      (val) => {
        multiseState.state.showText = val
      },
    )

    return {
      modeState,
      changeMode,
      toastState,
      multiseState,
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
            <kui-cell-group title="多列选择">
              <kui-cell
                title="基本用法"
                :show-right-icon="false"
                :desc="multiseState.state.showText"
                center
                @click="multiseState.methods.onClick"
              />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-picker
      v-model="multiseState.state.value"
      v-model:show="multiseState.state.show"
      v-model:formatValue="multiseState.state.formatValue"
      :columns="multiseState.state.columns"
      :title="multiseState.state.title"
      :format-separator="multiseState.state.formatSeparator"
      @change="multiseState.methods.onChange"
      @confirm="multiseState.methods.onConfirm"
      @cancel="multiseState.methods.onCancel"
    />
    <kui-toast v-model:show="toastState.show" :content="toastState.content" />
  </view>
</template>
