<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const readonlyValue = ref(20)

    return {
      ...toRefs({
        readonlyValue,
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
              <kui-cell-group title="只读">
                <kui-slider v-model="readonlyValue" readonly />
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
