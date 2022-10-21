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

    const multiseChainState = {
      state: reactive({
        show: false,
        value: [],
        formatValue: '',
        formatSeparator: '-',
        showText: '',
        showValue: '',
        title: '请选择城市',
        columns: [
          {
            text: '亚洲',
            value: 'YZ',
            children: [
              {
                text: '中国',
                value: 'CHN',
                children: [
                  {
                    text: '北京',
                    value: 'Beijing',
                  },
                  {
                    text: '上海',
                    value: 'Shanghai',
                  },
                  {
                    text: '广州',
                    value: 'Guangzhou',
                  },
                ],
              },
              {
                text: '日本',
                value: 'JPN',
                children: [
                  {
                    text: '东京',
                    value: 'Tokyo',
                  },
                  {
                    text: '北海道',
                    value: 'Hokkaido',
                  },
                ],
              },
            ],
          },
          {
            text: '欧洲',
            value: 'OZ',
            children: [
              {
                text: '英国',
                value: 'GBR',
                children: [
                  {
                    text: '伦敦',
                    value: 'London',
                  },
                  {
                    text: '爱丁堡',
                    value: 'Èideann',
                  },
                ],
              },
              {
                text: '法国',
                value: 'FRA',
                children: [
                  {
                    text: '巴黎',
                    value: 'Paris',
                  },
                  {
                    text: '马赛',
                    value: 'Marseille',
                  },
                ],
              },
            ],
          },
        ],
      }),
      methods: {
        onClick() {
          multiseChainState.state.show = true
        },
        onChange(e) {
          console.log(e)
        },
        onConfirm() {
          toastState.content = `当前选中值：${JSON.stringify(
            formatValue(multiseChainState.state.value),
          )}`
          toastState.show = true
        },
        onCancel(e) {
          console.log(e)
        },
        formatValue() {
          if (multiseChainState.state.value) {
            for (const i in multiseChainState.state.value) {
              multiseChainState.state.showText = multiseChainState.state
                .showText
                ? `${multiseChainState.state.showText}-${multiseChainState.state.value[i].text}`
                : multiseChainState.state.value[i].text
            }
          }
        },
      },
    }

    watch(
      () => multiseChainState.state.formatValue,
      (val) => {
        multiseChainState.state.showText = val
      },
    )

    return {
      modeState,
      changeMode,
      toastState,
      multiseChainState,
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
                title="多级联动"
                :show-right-icon="false"
                :desc="multiseChainState.state.showText"
                center
                @click="multiseChainState.methods.onClick"
              />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-picker
      v-model="multiseChainState.state.value"
      v-model:formatValue="multiseChainState.state.formatValue"
      v-model:show="multiseChainState.state.show"
      :columns="multiseChainState.state.columns"
      :title="multiseChainState.state.title"
      :format-separator="multiseChainState.state.formatSeparator"
      @change="multiseChainState.methods.onChange"
      @confirm="multiseChainState.methods.onConfirm"
      @cancel="multiseChainState.methods.onCancel"
    />
    <kui-toast v-model:show="toastState.show" :content="toastState.content" />
  </view>
</template>
