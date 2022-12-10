<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const textValue = ref('')

    return {
      ...toRefs({
        textValue,
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
              <kui-cell-group title="普通文本类型">
                <view class="kui-w-full">
                  <kui-shortpassword v-model="textValue" :password="false" />
                </view>
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
