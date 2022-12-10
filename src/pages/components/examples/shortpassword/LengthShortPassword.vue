<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const customLengthValue = ref('')

    return {
      ...toRefs({
        customLengthValue,
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
              <kui-cell-group title="自定义长度">
                <view class="kui-w-full">
                  <kui-shortpassword v-model="customLengthValue" :length="5" />
                </view>
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
