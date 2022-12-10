<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const url = 'https://kviewui-api.vercel.app/file/upload/add'

    const customUploadIconSizeValue = ref([
      {
        url: 'https://www.kviewui.com/images/dog.jpg',
        status: 'success',
      },
    ])

    return {
      ...toRefs({
        customUploadIconSizeValue,
      }),
      url,
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page bg-color="white" :custom-header="false">
      <template #body>
        <view class="kui-w-full">
          <kui-space :gap="[20, 0]">
            <view class="kui-w-full">
              <kui-cell-group title="自定义预览图大小">
                <kui-uploader v-model="customUploadIconSizeValue" :url="url" xhr-code-name="errcode" xhr-code="0" :upload-icon-size="150" :max-count="2" />
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
