<script lang="ts">
import {
  reactive,
} from 'vue'

export default {
  setup() {
    const baseState = {
      state: reactive({
        checked: true,
      }),
    }

    return {
      baseState,
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
            <kui-cell-group title="自定义颜色">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-switch v-model="baseState.state.checked" active-color="#FF6600" />
                </template>
              </kui-cell>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
