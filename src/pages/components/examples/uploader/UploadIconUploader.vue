<script lang="ts">
import {
  getCurrentInstance,
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const url = 'https://kviewui-api.vercel.app/file/upload/add'

    const customUploadIconValue = ref([])

    const {
      proxy,
    }: any = getCurrentInstance()
    const theme = proxy.$theme

    const mode = ref('light')

    return {
      theme,
      ...toRefs({
        customUploadIconValue,
        mode,
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
            <!-- #ifdef H5 -->
            <view class="kui-w-full">
              <kui-cell-group title="自定义上传图标">
                <kui-uploader v-model="customUploadIconValue" :url="url" xhr-code-name="errcode" xhr-code="0">
                  <template #upload-icon>
                    <kui-icons type="add1" :color="theme.colors[mode].grey[3]" :size="80" />
                  </template>
                </kui-uploader>
              </kui-cell-group>
            </view>
            <!-- #endif -->
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
