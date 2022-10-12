<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const state = reactive({
      span12: [12, 12],
      span8: [8, 8, 8],
      span6: [6, 6, 6, 6],
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<template>
  <kui-cell-group title="基本用法">
    <kui-space :gap="[30, 0]" direction="column">
      <kui-row>
        <kui-col class="a">
          <view class="kui-h-8 kui-rounded-md kui-bg-green-500 kui-flex kui-justify-center kui-items-center kui-text-white">
            <text>span:24</text>
          </view>
        </kui-col>
      </kui-row>
      <kui-row>
        <template v-for="(item, index) in span12" :key="index">
          <kui-col :span="item">
            <view class="kui-w-full">
              <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index % 2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                <text>span:{{ item }}</text>
              </view>
            </view>
          </kui-col>
        </template>
      </kui-row>
      <kui-row>
        <template v-for="(item, index) in span8" :key="index">
          <kui-col :span="item">
            <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index % 2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
              <text>span:{{ item }}</text>
            </view>
          </kui-col>
        </template>
      </kui-row>
      <kui-row>
        <template v-for="(item, index) in span6" :key="index">
          <kui-col :span="item">
            <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index % 2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
              <text>span:{{ item }}</text>
            </view>
          </kui-col>
        </template>
      </kui-row>
    </kui-space>
  </kui-cell-group>
</template>
