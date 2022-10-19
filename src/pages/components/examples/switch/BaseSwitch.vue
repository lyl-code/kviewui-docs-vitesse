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
            <kui-cell-group title="基本用法">
              <kui-cell :show-right-icon="false" :click-status="false">
                <template #content>
                  <kui-switch ref="baseSwitch" v-model="baseState.state.checked" />
                </template>
              </kui-cell>
            </kui-cell-group>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
