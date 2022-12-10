<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue'

export default {
  setup() {
    const rulesState = {
      state: reactive({
        value: 20,
      }),
      rules: {
        validator: value => value > 20,
        message: '值必须大于20',
      },
      methods: {
        onChange(e) {
          console.log(e)
        },
      },
    }

    return {
      ...toRefs({
        rulesState,
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
              <kui-cell-group title="值的校验" desc="暂不支持双滑块">
                <kui-slider v-model="rulesState.state.value" :rules="rulesState.rules" @change="rulesState.methods.onChange" />
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
