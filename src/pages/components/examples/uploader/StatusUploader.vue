<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const statusValue = ref([
      {
        url: 'https://www.kviewui.com/images/dog1.png',
        status: 'ready',
        message: '准备上传',
      },
      {
        url: 'https://www.kviewui.com/images/dog1.png',
        status: 'uploading',
        message: '上传中...',
      },
      {
        url: 'https://www.kviewui.com/images/dog1.png',
        status: 'failed',
        message: '上传失败',
      },
    ])

    return {
      ...toRefs({
        statusValue,
      }),
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
              <kui-cell-group title="上传状态" desc="status: ready/准备上传,uploading/上传中...,failed/上传失败,success/上传成功">
                <kui-uploader v-model="statusValue" :max-count="3" />
              </kui-cell-group>
            </view>
            <view class="kui-w-full">
              <kui-cell-group title="">
                <kui-text color="hsl(213,10.00%, 56.86%)">
                  示例数据为组件支持的部分数据，详细支持数据请参考组件源码和组件文档
                </kui-text>
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
