<script lang="ts">
import type {
  Ref,
} from 'vue'
import {
  getCurrentInstance,
  ref,
} from 'vue'

export default {
  setup() {
    const {
      proxy,
    }: any = getCurrentInstance()
    const theme = proxy.$theme

    const state = {
      mode: 'light',
    }

    const groupIndeterminate = ref(null) as Ref

    const indeterminateGroupState = {
      state: reactive({
        items: [
          { label: '复选按钮组', value: '1' },
          { label: '复选按钮组', value: '2' },
          { label: '复选按钮组', value: '3' },
          { label: '复选按钮组', value: '4' },
        ],
        indeterminate: true,
        checked: false,
        checkedGroup: [],
      }),
      methods: {
        onChange(e) {
          if (e.e) {
            if (e.checked)
              groupIndeterminate.value.toggleAll()

            else
              groupIndeterminate.value.toggleCancel()
          }
        },
        groupChange(e) {
          if (e.length === indeterminateGroupState.state.items.length) {
            indeterminateGroupState.state.indeterminate = false
            indeterminateGroupState.state.checked = true
          }
          else {
            indeterminateGroupState.state.checked = false
            indeterminateGroupState.state.indeterminate = true
          }
        },
      },
    }

    return {
      theme,
      state,
      groupIndeterminate,
      indeterminateGroupState,
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
            <kui-cell-group title="半选应用场景">
              <view
                class="kui-rounded kui-px-3 kui-pt-3 kui-bg-white" :style="{
                  backgroundColor: state.mode === 'dark' ? theme.colors[state.mode].grey[2] : '',
                }"
              >
                <kui-checkbox v-model:checked="indeterminateGroupState.state.checked" :indeterminate="indeterminateGroupState.state.indeterminate" @change="indeterminateGroupState.methods.onChange">
                  全选
                </kui-checkbox>
                <view
                  class="kui-my-3" :style="{
                    borderBottom: `1rpx solid ${theme.colors[state.mode].grey[2]}`,
                  }"
                />
                <kui-checkbox-group ref="groupIndeterminate" v-model="indeterminateGroupState.state.checkedGroup" direction="column" @change="indeterminateGroupState.methods.groupChange">
                  <template v-for="(item, index) in indeterminateGroupState.state.items" :key="index">
                    <kui-checkbox :value="item.value">
                      {{ item.label }}
                    </kui-checkbox>
                    <view
                      class="kui-my-3" :style="{
                        borderBottom: `1rpx solid ${theme.colors[state.mode].grey[2]}`,
                      }"
                    />
                  </template>
                </kui-checkbox-group>
              </view>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
