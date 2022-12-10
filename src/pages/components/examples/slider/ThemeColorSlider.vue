<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const customThemeColorValue = ref([0, 0, 0, 0, 0, 0])

    return {
      ...toRefs({
        customThemeColorValue,
      }),
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <view class="kui-w-full">
          <kui-space :gap="[30, 0]" direction="column">
            <view class="kui-w-full">
              <kui-cell-group title="自定义主题">
                <view class="kui-my-3">
                  <kui-slider v-model="customThemeColorValue[0]" theme-color="info" />
                </view>
                <view class="kui-my-6">
                  <kui-slider v-model="customThemeColorValue[1]" theme-color="danger" />
                </view>
                <view class="kui-my-6">
                  <kui-slider v-model="customThemeColorValue[2]" theme-color="warning" />
                </view>
                <view class="kui-my-6">
                  <kui-slider v-model="customThemeColorValue[3]" theme-color="gold" />
                </view>
                <view class="kui-my-6">
                  <kui-slider v-model="customThemeColorValue[4]" theme-color="cyan" />
                </view>
                <view class="kui-my-6">
                  <kui-slider v-model="customThemeColorValue[5]" theme-color="purple" />
                </view>
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>

<style>

</style>
