<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const url = 'https://kviewui-api.vercel.app/file/upload/add'

    const previewValue = ref([
      {
        url: 'https://www.kviewui.com/images/dog.jpg',
        status: 'success',
        name: '图片1111.png',
      },
      {
        url: 'https://www.kviewui.com/images/squirrel.png',
        status: 'success',
        name: '图片2222.png',
      },
    ])

    return {
      ...toRefs({
        previewValue,
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
              <kui-cell-group title="上传完成不显示预览图" desc="展示图片name值">
                <kui-uploader v-model="previewValue" :url="url" xhr-code-name="errcode" xhr-code="0" :preview-image="false" />
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
