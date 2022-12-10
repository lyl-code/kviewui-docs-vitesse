<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const baseValue = ref('')

    return {
      ...toRefs({
        baseValue,
      }),
    }
  },
}
</script>

<template>
  <view class="kui-w-full">
    <kui-page :custom-header="false">
      <template #body>
        <view class="kui-w-full">
          <kui-space :gap="[30, 0]" direction="column">
            <view class="kui-w-full">
              <kui-cell-group title="基本用法">
                <view class="kui-w-full">
                  <kui-shortpassword v-model="baseValue" focus />
                </view>
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
