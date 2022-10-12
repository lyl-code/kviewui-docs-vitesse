<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const state = reactive({
      span8: [8, 8, 8],
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<template>
  <kui-cell-group title="分栏间隔">
    <kui-row :gutter="20">
      <template v-for="(item, index) in span8" :key="index">
        <kui-col :span="item">
          <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index % 2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
            <text>span:{{ item }}</text>
          </view>
        </kui-col>
      </template>
    </kui-row>
  </kui-cell-group>
</template>
