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

    const iconChecked1 = ref(true)
    const iconChecked2 = ref(true)

    return {
      theme,
      iconChecked1,
      iconChecked2,
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
            <kui-cell-group title="自定义图标">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-checkbox v-model="iconChecked1" active-icon="check" inactive-icon="check">
                    复选按钮
                  </kui-checkbox>
                </template>
              </kui-cell>
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-checkbox v-model="iconChecked2" active-icon="check-square1" inactive-icon="check-square1">
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
