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

    return {
      baseState,
    }
  },
}
</script>

<template>
  <view>
    <kui-page :custom-header="false">
      <template #body>
        <kui-cell-group title="基本用法">
          <kui-cell title="基本用法" @click="baseState.methods.onClick">
            <template #right-icon>
              <kui-text>{{ baseState.state.val }}</kui-text>
            </template>
          </kui-cell>
        </kui-cell-group>
      </template>
    </kui-page>
    <kui-actionsheet
      v-model:show="baseState.state.show"
      :actions="baseState.state.actions"
      @choose="baseState.methods.onChoose"
    />
  </view>
</template>
