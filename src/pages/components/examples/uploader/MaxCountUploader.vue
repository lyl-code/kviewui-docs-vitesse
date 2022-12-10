<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const url = 'https://kviewui-api.vercel.app/file/upload/add'

    const maxCountValue = ref([
      {
        url: 'https://www.kviewui.com/images/dog.jpg',
        status: 'success',
      },
    ])

    return {
      ...toRefs({
        maxCountValue,
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
              <kui-cell-group title="限制上传数量">
                <kui-uploader v-model="maxCountValue" :url="url" xhr-code-name="errcode" xhr-code="0" :max-count="2" />
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
