<script lang="ts">
import {
  reactive,
} from 'vue'

export default {
  setup() {
    const descState = {
      state: reactive({
        show: false,
        actions: [{
          name: '选项一',
        }, {
          name: '选项二',
          description: '这是描述信息',
          color: '#00BC79',
        }, {
          name: '选项三',
        }],
        title: '这是标题',
        description: '这是描述信息',
        val: '',
      }),
      methods: {
        onClick() {
          descState.state.show = true
        },
        onChoose(item) {
          descState.state.val = item.name
        },
      },
    }

    return {
      descState,
    }
  },
}
</script>

<template>
  <view>
    <kui-page :custom-header="false">
      <template #body>
        <kui-cell-group title="基本用法">
          <kui-cell title="展示标题和描述" @click="descState.methods.onClick">
            <template #right-icon>
              <kui-text>{{ descState.state.val }}</kui-text>
            </template>
          </kui-cell>
        </kui-cell-group>
      </template>
    </kui-page>
    <kui-actionsheet
      v-model:show="descState.state.show"
      :actions="descState.state.actions"
      :description="descState.state.description"
      :title="descState.state.title"
      @choose="descState.methods.onChoose"
    />
  </view>
</template>
