<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const customThumbStyleValue = ref([20, 20])

    return {
      ...toRefs({
        customThumbStyleValue,
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
              <kui-cell-group title="自定义滑块按钮" desc="通过插槽实现">
                <kui-slider v-model="customThumbStyleValue[0]" hidden-label hidden-active-ripple>
                  <template #thumb>
                    <view class="kui-w-5 kui-h-5 kui-rounded-full kui-bg-white kui-shadow kui-border-0 kui-border-blue-600 kui-border kui-border-solid" />
                  </template>
                </kui-slider>
                <view class="kui-mt-3">
                  <kui-slider v-model="customThumbStyleValue[1]" hidden-label hidden-active-ripple>
                    <template #thumb>
                      <view class="kui-w-5 kui-h-3 kui-rounded-full kui-bg-blue-600 kui-shadow kui-border-0 kui-border-blue-600 kui-border kui-border-solid kui-flex kui-flex-col kui-items-center kui-justify-center kui-px-1 kui-py-px">
                        <kui-text color="white" size="10px">
                          {{ customThumbStyleValue[1] }}
                        </kui-text>
                      </view>
                    </template>
                  </kui-slider>
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
