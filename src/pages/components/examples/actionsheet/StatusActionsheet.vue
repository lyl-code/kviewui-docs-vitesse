<script lang="ts">
import {
  reactive,
} from 'vue'

export default {
  setup() {
    const statusState = {
      state: reactive({
        show: false,
        actions: [{
          name: '选中选项',
        }, {
          name: '加载选项',
          loading: true,
        }, {
          name: '禁用选项',
          disable: true,
        }],
        chooseItemValue: '选中选项',
        val: '',
      }),
      methods: {
        onClick() {
          statusState.state.show = true
        },
        onChoose(item) {
          statusState.state.val = item.name
        },
      },
    }

    return {
      statusState,
    }
  },
}
</script>

<template>
  <view>
    <kui-page :custom-header="false">
      <template #body>
        <kui-cell-group title="选项状态">
          <kui-cell title="不同选项状态" @click="statusState.methods.onClick">
            <template #right-icon>
              <kui-text>{{ statusState.state.val }}</kui-text>
            </template>
          </kui-cell>
        </kui-cell-group>
      </template>
    </kui-page>
    <kui-actionsheet
      v-model:show="statusState.state.show"
      :choose-item-value="statusState.state.chooseItemValue"
      :actions="statusState.state.actions"
      @choose="statusState.methods.onChoose"
    />
  </view>
</template>
