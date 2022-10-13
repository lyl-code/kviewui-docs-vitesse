<script lang="ts">
import {
  nextTick,
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const state = reactive({
      perecnt: 0,
    })

    const add = (type = '') => {
      nextTick(() => {
        state.perecnt = state.perecnt + 20
        state.perecnt = state.perecnt > 100 ? 100 : state.perecnt
      })
    }

    const decrease = (type = '') => {
      nextTick(() => {
        state.perecnt = state.perecnt - 20
        state.perecnt = state.perecnt < 0 ? 0 : state.perecnt
      })
    }

    return {
      // ...toRefs(state),
      state,
      add,
      decrease,
    }
  },
}
</script>

<template>
  <kui-cell-group title="动态改变">
    <kui-progress :percent="state.perecnt" color="#00BC79" />
    <view class="kui-flex kui-justify-center kui-mt-3">
      <kui-button @click="decrease">
        减少
      </kui-button>
      <view class="kui-mx-1" />
      <kui-button type="primary" @click="add">
        增加
      </kui-button>
    </view>
  </kui-cell-group>
</template>
