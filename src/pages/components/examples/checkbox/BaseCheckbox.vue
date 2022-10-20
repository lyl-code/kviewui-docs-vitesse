<script lang="ts">
import {
  getCurrentInstance,
  ref,
} from 'vue'

export default {
  setup() {
    const {
      proxy,
    }: any = getCurrentInstance()
    const theme = proxy.$theme

    const baseChecked1 = ref(true)
    const baseChecked2 = ref(false)

    return {
      theme,
      baseChecked1,
      baseChecked2,
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <view class="kui-w-full kui-h-full">
          <kui-space :gap="[30, 0]" direction="column">
            <kui-cell-group title="基本用法">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-checkbox v-model="baseChecked1">
                    复选按钮
                  </kui-checkbox>
                </template>
              </kui-cell>
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-checkbox v-model="baseChecked2" label-position="left">
                    复选按钮
                  </kui-checkbox>
                </template>
              </kui-cell>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
