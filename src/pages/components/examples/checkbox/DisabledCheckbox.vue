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

    const disabledChecked = ref(true)

    return {
      theme,
      disabledChecked,
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
            <kui-cell-group title="禁用状态">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-checkbox v-model="disabledChecked" disabled>
                    复选按钮
                  </kui-checkbox>
                </template>
              </kui-cell>
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-checkbox disabled>
                    复选按钮
                  </kui-checkbox>
                </template>
              </kui-cell>
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-checkbox indeterminate disabled>
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
