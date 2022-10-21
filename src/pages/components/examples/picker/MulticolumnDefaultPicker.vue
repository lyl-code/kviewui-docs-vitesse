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

    const multiseChainDefaultState = {
      state: reactive({
        show: false,
        value: [],
        defaultValue: ['OZ', 'GBR', 'Èideann'],
        formatValue: '',
        formatSeparator: '-',
        showText: '',
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
        onClick(type = '') {
          multiseChainDefaultState.state.show = true
        },
        onChange(e) {
          console.log(e)
        },
        onConfirm(e) {
          toastState.content = `当前选中值：${JSON.stringify(
            formatValue(multiseChainDefaultState.state.value),
          )}`
          toastState.show = true
        },
        onCancel(e) {
          console.log(e)
        },
      },
    }

    watch(
      () => multiseChainDefaultState.state.formatValue,
      (val) => {
        multiseChainDefaultState.state.showText = val
      },
    )

    return {
      modeState,
      changeMode,
      toastState,
      multiseChainDefaultState,
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
                title="设置默认选中"
                :show-right-icon="false"
                :desc="multiseChainDefaultState.state.showText"
                center
                @click="multiseChainDefaultState.methods.onClick()"
              />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-picker
      v-model="multiseChainDefaultState.state.value"
      v-model:show="multiseChainDefaultState.state.show"
      v-model:format-value="multiseChainDefaultState.state.formatValue"
      :columns="multiseChainDefaultState.state.columns"
      :title="multiseChainDefaultState.state.title"
      :default-value="multiseChainDefaultState.state.defaultValue"
      :format-separator="multiseChainDefaultState.state.formatSeparator"
      @change="multiseChainDefaultState.methods.onChange"
      @confirm="multiseChainDefaultState.methods.onConfirm"
      @cancel="multiseChainDefaultState.methods.onCancel"
    />
    <kui-toast v-model:show="toastState.show" :content="toastState.content" />
  </view>
</template>
