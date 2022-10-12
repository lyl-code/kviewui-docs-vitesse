<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const state = reactive({
      show: true,
      modeChecked: false,
    })

    const onChange = () => {
      state.show = !state.show
    }

    return {
      ...toRefs(state),
      onChange,
    }
  },
}
</script>

<template>
  <kui-cell-group title="显示状态">
    <kui-space :gap="[30, 40]">
      <kui-badge type="danger" :show="show" position="right-top" value="0">
        <kui-tag shape="square">
          动态显示
        </kui-tag>
      </kui-badge>
      <kui-button type="primary" @click="onChange">
        点击切换徽标状态
      </kui-button>
    </kui-space>
  </kui-cell-group>
</template>
