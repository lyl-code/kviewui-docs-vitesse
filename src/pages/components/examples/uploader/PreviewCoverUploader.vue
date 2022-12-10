<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const url = 'https://kviewui-api.vercel.app/file/upload/add'

    const customPreviewStyleValue = ref([
      {
        url: 'https://www.kviewui.com/images/squirrel.png',
        status: 'success',
      },
    ])

    return {
      ...toRefs({
        customPreviewStyleValue,
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
              <kui-cell-group title="预览图自定义样式">
                <kui-uploader v-model="customPreviewStyleValue" :url="url" xhr-code-name="errcode" xhr-code="0" :max-count="2">
                  <template #preview-cover>
                    <view class="kui-absolute kui-inset-b-0 kui-inset-l-0 kui-w-full">
                      <view
                        class="kui-flex kui-justify-center kui-py-1" :style="{
                          backgroundColor: 'rgba(0,0,0,.2)',
                        }"
                      >
                        <kui-text color="white">
                          图片名称
                        </kui-text>
                      </view>
                    </view>
                  </template>
                </kui-uploader>
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
