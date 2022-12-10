<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const url = 'https://kviewui-api.vercel.app/file/upload/add'

    const customUploadStyleValue = ref([])

    return {
      ...toRefs({
        customUploadStyleValue,
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
              <kui-cell-group title="自定义上传样式">
                <kui-uploader v-model="customUploadStyleValue" :url="url" xhr-code-name="errcode" xhr-code="0">
                  <kui-button type="primary">
                    上传文件
                  </kui-button>
                </kui-uploader>
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
