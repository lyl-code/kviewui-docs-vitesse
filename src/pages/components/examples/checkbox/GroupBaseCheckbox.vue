<script lang="ts">
import {
  getCurrentInstance,
  reactive,
} from 'vue'

export default {
  setup() {
    const {
      proxy,
    }: any = getCurrentInstance()
    const theme = proxy.$theme

    const state = {
      mode: 'light',
      toast: reactive({
        show: false,
        content: '',
      }),
      change: {
        methods: {
          onChange(e) {
            const desc = e.checked ? '选中' : '取消'
            state.toast.content = `${desc}复选按钮`
            state.toast.show = true
          },
        },
      },
    }

    const baseGroupState = {
      state: reactive({
        checkedGroup: ['1', '4'],
        items: [
          { label: '复选按钮组', value: '1' },
          { label: '复选按钮组', value: '2' },
          { label: '复选按钮组', value: '3' },
          { label: '复选按钮组', value: '4' },
        ],
      }),
      methods: {
        onChange(e) {
          baseGroupState.state.checkedGroup = e
        },
      },
    }

    return {
      theme,
      state,
      baseGroupState,
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <view class="kui-w-full kui-h-full">
          <kui-space :gap="[30, 0]" direction="column">
            <kui-cell-group title="复选按钮组-基本用法">
              <view
                class="kui-rounded kui-p-3 kui-bg-white" :style="{
                  backgroundColor: state.mode === 'dark' ? theme.colors[state.mode].grey[2] : '',
                }"
              >
                <kui-checkbox-group v-model="baseGroupState.state.checkedGroup" @change="baseGroupState.methods.onChange">
                  <template v-for="(item, index) in baseGroupState.state.items" :key="index">
                    <kui-checkbox :value="item.value">
                      {{ item.label }}
                    </kui-checkbox>
                  </template>
                </kui-checkbox-group>
                <view class="kui-mt-3 kui-flex">
                  <view class="kui-mr-3">
                    <kui-text>当前选中值</kui-text>
                  </view>
                  <view>
                    <kui-text>{{ JSON.stringify(baseGroupState.state.checkedGroup) }}</kui-text>
                  </view>
                </view>
              </view>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
