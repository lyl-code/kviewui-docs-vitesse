<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const state = reactive({
      span6a: [6, 6, 6],
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<template>
  <kui-cell-group title="Flex 对齐方式">
    <kui-space :gap="[30, 0]" direction="column">
      <view class="kui-w-full">
        <kui-row>
          <template v-for="(item, index) in span6a" :key="index">
            <kui-col :span="item">
              <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index % 2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                <text>span:{{ item }}</text>
              </view>
            </kui-col>
          </template>
        </kui-row>
      </view>
      <kui-row justify="end">
        <template v-for="(item, index) in span6a" :key="index">
          <kui-col :span="item">
            <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index % 2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
              <text>span:{{ item }}</text>
            </view>
          </kui-col>
        </template>
      </kui-row>
      <kui-row justify="center">
        <template v-for="(item, index) in span6a" :key="index">
          <kui-col :span="item">
            <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index % 2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
              <text>span:{{ item }}</text>
            </view>
          </kui-col>
        </template>
      </kui-row>
      <kui-row justify="space-between">
        <template v-for="(item, index) in span6a" :key="index">
          <kui-col :span="item">
            <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index % 2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
              <text>span:{{ item }}</text>
            </view>
          </kui-col>
        </template>
      </kui-row>
      <kui-row justify="space-around">
        <template v-for="(item, index) in span6a" :key="index">
          <kui-col :span="item">
            <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index % 2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
              <text>span:{{ item }}</text>
            </view>
          </kui-col>
        </template>
      </kui-row>
      <kui-row justify="space-evenly">
        <template v-for="(item, index) in span6a" :key="index">
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
