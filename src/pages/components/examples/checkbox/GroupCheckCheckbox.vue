<script lang="ts">
import type {
  Ref,
} from 'vue'
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

    const groupToggle = ref(null) as Ref

    const state = {
      mode: 'light',
    }

    const toggleGroupState = {
      state: reactive({
        checkedGroup: ['2', '3', '6'],
        items: [
          { label: '复选按钮组', value: '1' },
          { label: '复选按钮组', value: '2' },
          { label: '复选按钮组', value: '3' },
          { label: '复选按钮组', value: '4' },
          { label: '复选按钮组', value: '5' },
          { label: '复选按钮组', value: '6' },
        ],
      }),
      methods: {
        all(e) {
          groupToggle.value.toggleAll()
        },
        cancel(e) {
          groupToggle.value.toggleCancel()
        },
        reverse(e) {
          groupToggle.value.toggleReverse()
        },
        onChange(e) {
          console.log(e)
        },
      },
    }

    return {
      theme,
      state,
      groupToggle,
      toggleGroupState,
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
            <kui-cell-group title="复选按钮组-全选/取消/反选">
              <view
                class="kui-rounded kui-p-3 kui-bg-white" :style="{
                  backgroundColor: state.mode === 'dark' ? theme.colors[state.mode].grey[2] : '',
                }"
              >
                <kui-checkbox-group ref="groupToggle" v-model="toggleGroupState.state.checkedGroup" @change="toggleGroupState.methods.onChange">
                  <template v-for="(item, index) in toggleGroupState.state.items" :key="index">
                    <kui-checkbox :value="item.value">
                      {{ item.label }}
                    </kui-checkbox>
                  </template>
                </kui-checkbox-group>
              </view>
            </kui-cell-group>
            <view class="kui-flex">
              <kui-space>
                <kui-button type="primary" @click="toggleGroupState.methods.all">
                  全选
                </kui-button>
                <kui-button type="warning" @click="toggleGroupState.methods.cancel">
                  取消
                </kui-button>
                <kui-button type="danger" @click="toggleGroupState.methods.reverse">
                  反选
                </kui-button>
              </kui-space>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
