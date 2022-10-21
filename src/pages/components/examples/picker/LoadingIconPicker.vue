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

    const loadingMultiseChainState = {
      state: reactive({
        show: false,
        value: [],
        formatValue: '',
        formatSeparator: '-',
        showText: '',
        showValue: '',
        loadingIcon: 'spinner8',
        loadingSize: 48,
        loadingColor: 'primary',
        title: '请选择城市',
        loading: false,
        columns: [],
        data: [
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
        onClick(
          loadingIcon = 'spinner8',
          loadingColor = 'primary',
          loadingSize = 48,
        ) {
          loadingMultiseChainState.state.loading = true
          loadingMultiseChainState.state.loadingIcon = loadingIcon
          loadingMultiseChainState.state.loadingColor = loadingColor
          loadingMultiseChainState.state.loadingSize = loadingSize
          loadingMultiseChainState.state.columns
            = loadingMultiseChainState.state.data
          loadingMultiseChainState.methods.showPopup()
        },
        showPopup() {
          loadingMultiseChainState.state.show = true
        },
        onChange(e) {
          console.log(e)
        },
        onConfirm() {
          toastState.content = `当前选中值：${JSON.stringify(
            formatValue(loadingMultiseChainState.state.value),
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
      loadingMultiseChainState,
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
            <kui-cell-group title="加载状态">
              <kui-cell
                title="自定义加载图标样式"
                :show-right-icon="false"
                :desc="loadingMultiseChainState.state.showText"
                center
                @click="
                  loadingMultiseChainState.methods.onClick('spinner9', 'blue')
                "
              />
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-picker
      v-model="loadingMultiseChainState.state.value"
      v-model:formatValue="loadingMultiseChainState.state.formatValue"
      v-model:show="loadingMultiseChainState.state.show"
      v-model:loading="loadingMultiseChainState.state.loading"
      :columns="loadingMultiseChainState.state.columns"
      :title="loadingMultiseChainState.state.title"
      :format-separator="loadingMultiseChainState.state.formatSeparator"
      :loading-icon="loadingMultiseChainState.state.loadingIcon"
      :loading-color="loadingMultiseChainState.state.loadingColor"
      @change="loadingMultiseChainState.methods.onChange"
      @confirm="loadingMultiseChainState.methods.onConfirm"
      @cancel="loadingMultiseChainState.methods.onCancel"
    />
    <kui-toast v-model:show="toastState.show" :content="toastState.content" />
  </view>
</template>
