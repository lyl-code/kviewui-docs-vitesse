<script lang="ts">
import {
  reactive,
} from 'vue'

export default {
  setup() {
    const baseState = {
      state: reactive({
        show: false,
        actions: [{
          name: '选项一',
        }, {
          name: '选项二',
        }, {
          name: '选项三',
        }],
        val: '',
      }),
      methods: {
        onClick() {
          baseState.state.show = true
        },
        onChoose(item) {
          baseState.state.val = item.name
        },
      },
    }

    const cancelState = {
      state: reactive({
        ...baseState.state,
        cancelText: '取消',
      }),
      methods: {
        onClick() {
          cancelState.state.show = true
        },
        onChoose(item) {
          cancelState.state.val = item.name
        },
      },
    }

    return {
      baseState,
      cancelState,
    }
  },
}
</script>

<template>
  <view>
    <kui-page :custom-header="false">
      <template #body>
        <kui-cell-group title="基本用法">
          <kui-cell title="展示取消按钮" @click="cancelState.methods.onClick">
            <template #right-icon>
              <kui-text>{{ cancelState.state.val }}</kui-text>
            </template>
          </kui-cell>
        </kui-cell-group>
      </template>
    </kui-page>
    <kui-actionsheet
      v-model:show="cancelState.state.show"
      :actions="cancelState.state.actions"
      :cancel-text="cancelState.state.cancelText"
      @choose="cancelState.methods.onChoose"
    />
  </view>
</template>
