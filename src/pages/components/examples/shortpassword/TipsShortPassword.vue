<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const tipsValue = ref('')

    const errorMessage = ref('')

    const onChange = (e) => {
      console.log(e)
    }

    const onConfirm = (e) => {
      if (e !== '666666')
        errorMessage.value = '密码错误'

      else
        errorMessage.value = ''
    }

    return {
      ...toRefs({
        tipsValue,
        errorMessage,
      }),
      onChange,
      onConfirm,
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
              <kui-cell-group title="提示信息">
                <view class="kui-w-full">
                  <kui-shortpassword v-model="tipsValue" tips-message="请输入6位数字密码" :error-message="errorMessage" @change="onChange" @confirm="onConfirm" />
                </view>
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
